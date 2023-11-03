---
sidebar_position: 2
slug: /create
---

# Creating with Vircadia

For the time being, content/models are created externally in software packages like [Blender](https://www.blender.org/) and positioned in 3d space using the Vircadia Native Client.

# Asset Creation

Vircadia officially supports glTF 2.0 models.

For best performance:

* Use less materials
* Use less polygons
* Combine model clusters to lower the object count
  
  

Take advantage of LOD by appending the following suffixes to your meshes' name:

* _LOD0 *required, highest detail*
* _LOD1
* _LOD2
* _LOD3

### Properties

In your glTF extras properties, use the properties to configure LOD settings, overriding the defaults.

For more information on how our LOD works, see Babylon.js' [documentation](https://doc.babylonjs.com/features/featuresDeepDive/mesh/LOD) on LOD.
In [Blender](https://www.blender.org/), add these properties in the "Object" tab under "Custom Properties."



#### Automatic Generation

Property `vircadia_lod_auto`:

* `true`
* `false` *default*

#### Mode

Property `vircadia_lod_mode`:

* `distance` *default*
* `size`

Distance mode switches between objects based on their distance from the camera
Size mode switches between object depending their size on screen. As a natural result larger objects will maintain their detail at a greater distance.

#### Distance

Property `vircadia_lod_distance`:

* `0` to `100000` in meters.

Defaults are ...

#### Size

Property `vircadia_lod_size`:

* `0.01` to `1.0`

#### Billboard

Property `vircadia_billboard_mode`:

- `x, y, z, all`or `none` *default*

With billboarding an object will always face the specified direction. This is especially useful on low detail LODs to create a "cardboard cutout" that always faces the camera

#### Hide

property  `vircadia_lod_hide`

- `0` to `100000` in meters.

Specifies the distance at which the object is culled completely (*optional*).
Note: this propery must be added to LOD0 to take effect.

# Asset Hosting

Configuring CORS on your hosting provider enables assets to be loaded into the world from URLs that are not on the same domain as the web client.

1. [CORS on AWS S3](https://www.dynatrace.com/support/help/setup-and-configuration/setup-on-cloud-platforms/amazon-web-services/set-up-cors-in-amazon-s3) - Cloud
