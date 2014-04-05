# HackOregon-Couch v0.0.2

Exports database information from PostgreSQL and imports into a CouchDB.

## Installation

`hackoregon-couch` runs on [Node.js](http://nodejs.org). Installation assumes you've installed Node.js (0.10.22+) and have `npm` installed.

```
npm install hackoregon-couch -g
```

This will make the command `hackoregon-couch` available.

## Usage

The following environment variables must be set:

```
PG_URL=postgres://localhost/hackoregon
COUCH_PORT=5984
COUCH_HOST=localhost
```

At the moment, only one option is supported:

```
hackoregon-couch --exportCommittees dbname
```

### Output Format

- exportCommittees:  
The `exportCommittees` function will export each of the committees found in the database, and retrieve all of the transactions for that committee as an attribute to that object called `transactions`, which will contain all transaction documents.

## The MIT License (MIT)

Copyright (c) 2014 Nathan Wittstock

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

