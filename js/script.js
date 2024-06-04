// Copyright (c) 2024 Mr. Coxal All rights reserved
//
// Created by: Tymofii
// Created on: Jun 2024
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {

  const params = new URLSearchParams(document.location.search)

  const radius = parseFloat(params.get("radius"))
  console.log(radius)

  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)
  const dimensions =
    "<ul>\n<li>Radius = " +
    radius +
    " units</li>\n</ul>"

  document.getElementById("dimensions").innerHTML = dimensions
  document.getElementById("volume").innerHTML = "Volume is: " + volume.toFixed(2) + " cubic units"
}
