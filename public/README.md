# Cornellius webpage

```bash
git clone git@github.com:cornellius-gp/cornellius-gp.github.io.git
cd cornellius-gp.github.io
git checkout dev
```

**Make sure to check out the  dev  branch!**

## Requirements

```bash
brew install node
npm install -g npm
```

Add the following to your bashrc (or zshrc)

```bash
export PATH="$HOME/.npm-packages/bin:$PATH"
```

## Setup

- Install packages
```bash
npm i
```

## Develop

```bash
npm start
```

It should open up http://localhost:1337

## Deploy

```bash
npm run deploy
```
