#!/usr/bin/env bash

set -euo pipefail

cd "$(dirname "$0")" || exit 1
jq 'keys_unsorted' ../../javascript/scales.json
