import React from 'react';

export default () => {
  return (
    <svg class="fire" viewBox="0 -20 120 240">
      <defs>
        <linearGradient
          id="fire-gradient-basic"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop stop-color="#ffb200" offset="0.2" />
          <stop stop-colo r="#dc0000" offset="1" />
        </linearGradient>
        <linearGradient
          id="fire-gradient-red"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop stop-color="#ffb200" offset="0" />
          <stop stop-color="#dc0000" offset="0.9" />
        </linearGradient>
        <linearGradient
          id="fire-gradient-yellow"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop stop-color="#ffb200" offset="0.3" />
          <stop stop-color="#dc0000" offset="1" />
        </linearGradient>
      </defs>

      <g stroke-width="0.5" stroke-opacity="0.5">
        <path
          class="spark"
          fill="#ffd700"
          stroke="#ff0"
          d="M13 90c-8,-10 -6,-14 -5,-21 3,-3 0,-7 -2,-19 8,11 18,12 7,40l0 0z"
        ></path>
        <path
          class="spark"
          fill="#ffd700"
          stroke="#ff0"
          d="M36 45c8,-10 6,-14 5,-21 -3,-3 0,-7 2,-19 -8,11 -18,12 -7,40l0 0z"
        ></path>
        <path
          class="spark"
          fill="#ffd700"
          stroke="#ff0"
          d="M63 48c8,-10 6,-14 5,-21 -3,-3 0,-7 2,-19 -8,11 -18,12 -7,40l0 0z"
        ></path>
        <path
          class="spark"
          fill="#ffd700"
          stroke="#ff0"
          d="M83 80c-8,-10 -6,-14 -5,-21 3,-3 0,-7 -2,-19 8,11 18,12 7,40l0 0z"
        ></path>
        <path
          class="spark"
          fill="#ffd700"
          stroke="#ff0"
          d="M94 126c8,-10 6,-14 5,-21 -3,-3 0,-7 2,-19 -8,11 -18,12 -7,40l0 0z"
        ></path>
        <path
          class="flame"
          fill="url(#fire-gradient-basic)"
          stroke="#ff0"
          d="M46 50c1,13 -15,26 -13,44 0,11 -4,-17 -2,-26 -1,-8 -3,-16 -9,-21 8,42 -28,33 -5,88 -4,-2 -8,-4 -12,-7 4,13 9,21 15,28 9,9 21,13 39,16 13,4 28,2 38,-6 10,-7 15,-19 12,-34 -3,6 -7,10 -13,12 3,-17 -14,-25 -7,-42 10,-20 3,-45 0,-32 -4,12 -11,21 -20,29 22,-70 -10,-53 -11,-88 -9,12 -14,23 -12,39z"
        ></path>
        <path
          class="flame"
          fill="url(#fire-gradient-yellow)"
          stroke="#ff0"
          d="M51 168c-55,-58 30,-62 -11,-121 11,39 -13,64 -21,76 -5,-15 -1,-21 5,-39 -38,42 -9,63 27,84l0 0z"
        ></path>
        <path
          class="flame"
          fill="url(#fire-gradient-yellow)"
          stroke-width="0.5"
          stroke="#ff0"
          d="M55 168c-1,-14 -3,-25 15,-38 31,-22 16,-34 -3,-57 5,22 -4,40 -12,52 -5,8 -23,23 0,43z"
        ></path>
        <path
          class="flame"
          fill="url(#fire-gradient-red)"
          stroke="#ff0"
          d="M63 172c9,-5 11,-20 12,-37 2,-17 7,-33 34,-36 -11,9 -20,20 -16,41 -1,31 -24,29 -30,32l0 0z"
        ></path>
      </g>

      <text
        font-size="18"
        fill="#111"
        x="60"
        y="195"
        text-anchor="middle"
        font-weight="600"
      >
        ON FIRE
      </text>
    </svg>
  );
};
