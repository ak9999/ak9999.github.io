default:
    @just --list

# Build the site into _site/
build:
    bun run build

# Run the dev server with live reload
start:
    bun run start

# Create a new post: just post my-slug
post slug:
    #!/usr/bin/env bash
    set -euo pipefail
    slug="{{slug}}"
    if [[ ! "$slug" =~ ^[a-z0-9]+(-[a-z0-9]+)*$ ]]; then
        echo "slug must be lowercase letters, digits, and hyphens (e.g. my-new-post)" >&2
        exit 1
    fi
    file="src/posts/$(date +%F)-$slug.md"
    if [[ -e "$file" ]]; then
        echo "$file already exists" >&2
        exit 1
    fi
    title=$(echo "$slug" | tr '-' ' ' | sed 's/\b\(.\)/\u\1/g')
    cat > "$file" <<EOF
    ---
    title: $title
    date: $(date +%F)
    layout: layout.njk
    ---

    EOF
    echo "Created $file"
