/**
 *  Copyright (c) taskylizard. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives
} from 'unocss'

export default defineConfig({
  content: {
    filesystem: ['.vitepress/config.mts', '.vitepress/constants.ts']
  },
  theme: {
    colors: {
      swarm: {
        "50": "hsl(210, 75%, 97%)",
        "100": "hsl(206, 68%, 93%)",
        "200": "hsl(208, 66%, 87%)",
        "300": "hsl(206, 65%, 78%)",
        "400": "hsl(207, 65%, 68%)",
        "500": "hsl(211, 63%, 61%)",
        "600": "hsl(215, 57%, 53%)",
        "700": "hsl(218, 53%, 48%)",
        "800": "hsl(220, 48%, 40%)",
        "900": "hsl(219, 44%, 33%)",
        "950": "hsl(220, 40%, 21%)"
      },
      turquoise: {
        "50": "hsl(184, 89%, 96%)",
        "100": "hsl(186, 88%, 90%)",
        "200": "hsl(185, 85%, 82%)",
        "300": "hsl(187, 85%, 69%)",
        "400": "hsl(188, 78%, 60%)",
        "500": "hsl(188, 86%, 43%)",
        "600": "hsl(191, 84%, 36%)",
        "700": "hsl(192, 75%, 31%)",
        "800": "hsl(194, 64%, 27%)",
        "900": "hsl(197, 59%, 24%)",
        "950": "hsl(197, 71%, 15%)"
      },
      carnation: {
        "50": "hsl(0, 86%, 97%)",
        "100": "hsl(0, 93%, 94%)",
        "200": "hsl(0, 96%, 89%)",
        "300": "hsl(0, 94%, 82%)",
        "400": "hsl(0, 91%, 71%)",
        "500": "hsl(0, 84%, 60%)",
        "600": "hsl(0, 72%, 51%)",
        "700": "hsl(0, 74%, 42%)",
        "800": "hsl(0, 70%, 35%)",
        "900": "hsl(0, 63%, 31%)",
        "950": "hsl(0, 75%, 15%)"
      },
      cerise: {
        "50": "hsl(350, 86%, 97%)",
        "100": "hsl(352, 85%, 95%)",
        "200": "hsl(347, 84%, 90%)",
        "300": "hsl(348, 83%, 82%)",
        "400": "hsl(348, 82%, 71%)",
        "500": "hsl(346, 77%, 57%)",
        "600": "hsl(343, 67%, 50%)",
        "700": "hsl(342, 71%, 41%)",
        "800": "hsl(340, 68%, 35%)",
        "900": "hsl(338, 65%, 30%)",
        "950": "hsl(339, 75%, 16%)"
      },
      meadow: {
        "50": "hsl(148, 71%, 96%)",
        "100": "hsl(148, 73%, 90%)",
        "200": "hsl(150, 70%, 80%)",
        "300": "hsl(154, 66%, 67%)",
        "400": "hsl(156, 59%, 52%)",
        "500": "hsl(158, 77%, 42%)",
        "600": "hsl(159, 86%, 30%)",
        "700": "hsl(161, 85%, 24%)",
        "800": "hsl(161, 80%, 20%)",
        "900": "hsl(162, 79%, 16%)",
        "950": "hsl(164, 83%, 9%)"
      },
      merlin: {
        "50": "hsl(46, 92%, 95%)",
        "100": "hsl(46, 97%, 88%)",
        "200": "hsl(46, 98%, 77%)",
        "300": "hsl(45, 98%, 64%)",
        "400": "hsl(45, 96%, 53%)",
        "500": "hsl(45, 93%, 47%)",
        "600": "hsl(45, 96%, 40%)",
        "700": "hsl(46, 92%, 33%)",
        "800": "hsl(45, 81%, 29%)",
        "900": "hsl(45, 73%, 26%)",
        "950": "hsl(45, 83%, 14%)"
      },
      "blue-violet": {
        "50": "hsl(227, 100%, 96%)",
        "100": "hsl(231, 100%, 94%)",
        "200": "hsl(231, 100%, 88%)",
        "300": "hsl(233, 100%, 82%)",
        "400": "hsl(237, 98%, 74%)",
        "500": "hsl(242, 91%, 64%)",
        "600": "hsl(246, 82%, 59%)",
        "700": "hsl(248, 63%, 51%)",
        "800": "hsl(246, 59%, 41%)",
        "900": "hsl(245, 52%, 34%)",
        "950": "hsl(247, 51%, 20%)"
      },
      primary: 'var(--vp-c-brand-1)',
      bg: 'var(--vp-c-bg)',
      'bg-alt': 'var(--vp-c-bg-alt)',
      'bg-elv': 'var(--vp-c-bg-elv)',
      text: 'var(--vp-c-text-1)',
      'text-2': 'var(--vp-c-text-2)',
      div: 'var(--vp-c-divider)'
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    })
  ],
  transformers: [transformerDirectives()]
})
