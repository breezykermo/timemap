<h1 align="center">
  TimeMap v0
</h1>

<h3>DEPRECATED. Please note that this repository is no longer actively maintained. For a more active fork, see <a href="https://github.com/bellingcat/ukraine-timemap">this project</a>.</h2>

<p align="center">
  <strong>TimeMap is a tool for exploration, monitoring and classification of incidents in time and space.<br>See a <a href="https://blmprotests.forensic-architecture.org">live instance here</a>.</strong><br>
</p>

![](docs/example-timemap.png)

[![Build status](https://travis-ci.com/forensic-architecture/timemap.svg?branch=develop)](https://travis-ci.com/forensic-architecture/timemap)

## Overview

TimeMap is a standalone frontend application that allows to explore and monitor events in time and space. TimeMap uses OpenStreetMap satellite imagery as a backdrop by default, but can also be configured to use [mapbox](https://www.mapbox.com/). It uses Leaflet and d3 to visually map information.

The recommended way to run a backend for timemap is using [datasheet-server](https://github.com/forensic-architecture/datasheet-server). This allows you to work with a spreadsheet or Google Sheet as a dynamic database for for timemap.

TimeMap has the following high-level features capabilites:

- Visualize incidents of particular events on a map.
- Visualize and filter these incidents over time, on an adjustable timeline that allows to zoom in and out.
- Visualize types of incidents by tag and by category, which can be displayed using different styles.

A fully-functioning live version can be found as a result of the Forensic Architecture investigation of the [Battle of Ilovaisk](https://ilovaisk.forensic-architecture.org).

## Get up and running

These easiest way to get up and running with timemap and datasheet-server is to
[follow the in-depth tutorial here](https://forensic-architecture.org/investigation/timemap-for-cartographic-platforms).

We recommend using **Node v16.x.x** for its current compatibility.
TimeMap may not work with other versions of Node.

### Quickstart

1. Pull this repository.

```shell
git clone https://github.com/forensic-architecture/timemap
```

2. Install dependencies via npm.

```shell
npm install
```

3. Copy the example config

```shell
cp example.config.js config.js
```

4. Run the development server, which will be available at http://localhost:8080.

```shell
CONFIG=config.js npm run dev
```

To run with a file that is not 'config.js' in the root directory, set the `CONFIG` environment variable:

```
CONFIG="myotherconfig.js" npm run dev
```

At this stage, you'll probably only see a basic map with several error modals. In order for TimeMap to be able to display interesting information, you'll have to make sure to have the capacity to serve data, as well as adjusting some configuration parameters. See the [in-depth tutorial](https://forensic-architecture.org/investigation/timemap-for-cartographic-platforms) or [datasheet-server](https://github.com/forensic-architecture/datasheet-server).

#### Running without datasheet-server

Technically, timemap is backend agnostic, but it requires a series of endpoints to provide data for it to visualize. The data is expected in JSON format. Some data elements are required and their format has some required fields. Other additional endpoints are optional, and if enabled, they simply add features to your taste.

The combination of all these data types is called the `domain` of the application in the context of TimeMap.

#### Running tests

We are currently using [Jest](https://jestjs.io/) for front-end and component testing. These tests can be found inside `src/test`. The test suite can be invoked through `CONFIG="my-optional-config.js" npm run test`.

We also include an [Ava](https://github.com/avajs/ava) test suite for smoke testing the Node server process responsible for instantiating the app. This test suite can be invoked using `CONFIG="my-optional-config.js" npm run test:ava`

### Contributing

Interested in helping us improve timemap? See [our contributing guide](CONTRIBUTING.md) to learn how to contribute and make suggestions. Please also read our [code of conduct](CODE_OF_CONDUCT.md). We endeavour to cultivate a community around timemap and other OSS at Forensic Architecture that is inclusive and respectful. Please join us in this!

## Community

If you have any questions or just want to chat, please [join our Discord server](https://discord.gg/PjHKHJD5KX). This is where you can ask questions, as well as track our internal development on timemap and other codebases at Forensic Architecture.

## [License](LICENSE.md)

timemap is distributed under the [DoNoHarm license](https://github.com/raisely/NoHarm).
