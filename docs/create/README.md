---
sidebar_position: 2
slug: /create
---

# Creating with Vircadia

Coming soon.

# Asset Creation

Vircadia officially supports glTF 2.0 models.

For best performance:
* **Use less materials, vertex colors are best! (this is most important)**
* Use less polygons

## LOD

Take advantage of LOD by appending the following to your meshes' name:

* _LOD0 *required*
* _LOD1
* _LOD2
* _LOD3
* _LOD4
* _LODHIDE

### Properties

In your glTF extras properties, use the properties to configure LOD settings, overriding the defaults.

:::info

For more information on how our LOD works, see Babylon.js' [documentation](https://doc.babylonjs.com/features/featuresDeepDive/mesh/LOD) on LOD.

:::

#### Automatic Generation

Property `vircadia_lod_auto`:
* `true`
* `false` *default*

#### Mode

Property `vircadia_lod_mode`:
* `distance` *default*
* `size`

#### Distance

Property `vircadia_lod_distance`:
* `0` to `100000` in meters.

#### Size

Property `vircadia_lod_size`:
* `0.01` to `1.0`

# Asset Hosting

Configuring CORS on your hosting provider enables assets to be loaded into the world from URLs that are not on the same domain as the web client.

1. [CORS on AWS S3](https://www.dynatrace.com/support/help/setup-and-configuration/setup-on-cloud-platforms/amazon-web-services/set-up-cors-in-amazon-s3) - Cloud
