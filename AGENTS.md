# Oiltech Bearings Site - Jekyll

## Overview
Website for Oiltech Bearings Ltd - whitemetal bearing manufacturing, repair, and re-engineering services.

## Access
- **Production**: https://oiltechbrg.com
- **Local Dev**: http://localhost:8080/oiltech

## Build Commands
```bash
# Build for local development
docker compose exec jekyll jekyll build --config _config.yml,_config_dev.yml

# Watch mode
docker compose exec jekyll jekyll build --config _config.yml,_config_dev.yml --watch
```

## Key Info
- Contact form: Formspree
- Analytics: Google Analytics + Tag Manager
