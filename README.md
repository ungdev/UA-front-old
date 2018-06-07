# UTT Arena 2018

## Requirements

* [Node.js](https://nodejs.org/)
* [yarn](https://yarnpkg.com/)

## Installation

```
git clone git@github.com:ungdev/arena.utt.fr-2018.git
# or
git clone https://github.com/ungdev/arena.utt.fr-2018.git

cd arena.utt.fr-2018
yarn
```

## Configuration

```
# copy env file for all environments
cp .env .env.local
# makes your changes in .env.local, which will not be pushed
nano .env.local

# copy env file for development environment
cp .env.development .env.development.local
# makes your changes in .env.development.local, which will not be pushed
nano .env.development.local
```

## Commands

```
yarn dev    # development server
yarn build  # build production assets
yarn start  # static server
yarn serve  # pm2 static server (load balancing)
yarn reload # pm2 hot reload
yarn lint   # prettier lint
```

## Structure

```
arena.utt.fr-2018/
├── public/                       # public assets that will be served directly (should not be used for fonts, images nor css)
├── src/                          # base directory
│   ├── assets/                      # assets (eg. fonts, images, css)
│   ├── components/                  # widely used components
│   │   └── button/
│   ├── containers/                  # pages that handle routes
│   │   └── home/
|   │      └── components/           # components used by this container only
│   ├── modules/                     # store / actions / reducers
│   │   └── user/
│   ├── index.css                    # common css
│   ├── index.js                     # entry point
│   ├── registerServiceWorker.js     # generated file for PWA
│   └── store.js                     # store entry point
├── .editorconfig                 # define your editor options
├── .env                          # global configuration
├── .env.local                    # override global configuration (not pushed to repository)
├── .env.development              # development-only configuration
└── .env.development.local        # override development-only configuration (not pushed to repository)
```
