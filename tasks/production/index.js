// Copyright 2019 Extreme Networks, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

console.log('HELLO WORLD - PRODUCTION');
const gulp = require('gulp');
const requireDir = require('require-dir');

module.exports = requireDir('./', { recurse: true });
console.log("gulp - make production task")
gulp.task('production', function(){
  console.log("in production task")
  const s = gulp.series([
    'production-environment',
    'production-scripts',
    'production-styles',
    'production-static',
    'production-package-metadata',
  ]);
  console.log("s",s);
  return s;
});
