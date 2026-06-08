#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TMP="$(mktemp -d)"

create_branch() {
  local name="$1"
  local source="$2"

  rm -rf "$TMP"/*
  cp -a "$ROOT/$source/." "$TMP/"
  rm -f "$TMP/.env"

  git -C "$TMP" init -q
  git -C "$TMP" checkout -b "$name"
  git -C "$TMP" add -A
  git -C "$TMP" commit -q -m "Deploy branch for EasyPanel ($name)"

  git -C "$ROOT" push origin "file://$TMP#$name:$name" --force
}

create_branch backend backend
create_branch frontend frontend

echo "Pushed branches: backend, frontend"
