import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-integration-bubbles',
  templateUrl: './integration-bubbles.component.html',
  styleUrls: ['./integration-bubbles.component.scss']
})
export class IntegrationBubblesComponent implements OnInit {
  bubbles = [
    { s: 0.6, x: 1134, y: 45 },
    { s: 0.6, x: 1620, y: 271 },
    { s: 0.6, x: 1761, y: 372 },
    { s: 0.6, x: 2499, y: 79 },
    { s: 0.6, x: 2704, y: 334 },
    { s: 0.6, x: 2271, y: 356 },
    { s: 0.6, x: 795, y: 226 },
    { s: 0.6, x: 276, y: 256 },
    { s: 0.6, x: 1210, y: 365 },
    { s: 0.6, x: 444, y: 193 },
    { s: 0.6, x: 2545, y: 387 },
    { s: 0.8, x: 1303, y: 193 },
    { s: 0.8, x: 907, y: 88 },
    { s: 0.8, x: 633, y: 320 },
    { s: 0.8, x: 323, y: 60 },
    { s: 0.8, x: 129, y: 357 },
    { s: 0.8, x: 1440, y: 342 },
    { s: 0.8, x: 1929, y: 293 },
    { s: 0.8, x: 2135, y: 198 },
    { s: 0.8, x: 2276, y: 82 },
    { s: 0.8, x: 2654, y: 182 },
    { s: 0.8, x: 2783, y: 60 },
    { x: 1519, y: 118 },
    { x: 1071, y: 233 },
    { x: 1773, y: 148 },
    { x: 2098, y: 385 },
    { x: 2423, y: 244 },
    { x: 901, y: 385 },
    { x: 624, y: 111 },
    { x: 75, y: 103 },
    { x: 413, y: 367 },
    { x: 2895, y: 271 },
    { x: 1990, y: 75 }
  ];

  constructor() {}

  ngOnInit() {}
}
