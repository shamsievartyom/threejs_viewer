# ThreeJS Viewer

## An interactive 3D object viewer built with Three.js, React, and TypeScript.

## Content

1. [Link to Application](#link-to-application)
2. [How to use](#how-to-use)
3. [Build and Run Instructions](#build-and-run-instructions)
4. [Libraries](#libraries)

## Link to Application

https://shamsievartyom.github.io/threejs_viewer/

## How to use

1. Import 3D object into the scene

You can add multiple objects to the scene, but this scenario requires that all meshes added to the scene have different names.

    import > FBX

2. Select object

You can select a mesh or point light and then transform the selected object or change parameters of the point light.

    Left click on the object that you want to be selected.

3. Transform

Select an object, then you can transform the object using the "Object" menu. Also, you can select an object and use transform controls.

    1 Select object > Go to "Object" in menu > Change input values
    2 Select object > Drag transform controls (for changing transform control mode use Right click)

4. Change light intensity and distance

Select a point light, then you get access to light parameters in the "Object" menu.

    Select object > Go to "Object" in menu > Change input values

5. Scene settings

You can change default settings in the "Scene" menu (changing the Shadow Resolution only works before importing objects).

    Go to "Scene" > Change input values

## Build and Run Instructions

1. Preparing the Working Environment

Ensure that you have Node.js and npm installed. If not, install them from the official [Node.js website](https://nodejs.org/).
Check the versions of Node.js and npm to make sure they are present by running:

    node -v
    npm -v

2. Cloning the Repository

Clone your project repository to your local computer using the command:

    git clone https://github.com/MostBridge/Frontend

Navigate to the project folder:

    cd Frontend

3. Installing Dependencies

In the project's root directory, run the following command to install all necessary dependencies:

    npm install

4. Running the Project

To start the project, use the following command:

    npm run dev

For building, use the following command:

    npm run build

## Libraries

Project written with these libraries:
- React
- Redux toolkit
- TypeScript
- Vite
- React Three Fiber
