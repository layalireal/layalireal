#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
REMOTE="${DEPLOY_REMOTE:-origin}"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

create_branch() {
  local name="$1"
  local source="$2"
  local work="$TMP/$name"

  rm -rf "$work"
  mkdir -p "$work"
  cp -a "$ROOT/$source/." "$work/"
  rm -f "$work/.env"

  git -C "$work" init -q
  git -C "$work" checkout -b "$name"
  git -C "$work" add -A
  git -C "$work" commit -q -m "Deploy branch for EasyPanel ($name)"

  git -C "$work" remote add origin "$(git -C "$ROOT" remote get-url "$REMOTE")"
  git -C "$work" push origin "$name:$name" --force
}

create_branch backend backend
create_branch frontend frontend

echo "Pushed branches: backend, frontend"
echo ""
echo "EasyPanel frontend service:"
echo "  Branch: frontend | Build Path: / | Proxy port: 3000"
echo "Or prefer: Branch: main | Build Path: /frontend | Proxy port: 3000"
