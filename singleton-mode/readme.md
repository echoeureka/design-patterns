## Introduction

Single-case mode is a common pattern, there are some objects we often only need one, such as thread pool, global cache, window objects in the browser and so on. The single-case pattern is used to ensure that a class has only one instance and provides a global access point to it.

## advantages

- Because the single-case pattern has only one instance in memory, the benefits of the single-case pattern are obvious because memory expenses are reduced, especially when an object needs to be created, destroyed frequently, and performance cannot be optimized when created or destroyed.

- Because the single-case pattern generates only one instance, the performance overhead of the system is reduced, and when an object is generated with more resources, such as reading configurations and generating other dependent objects, it can be resolved by generating a single-case object directly at app launch and then permanently resemming memory.

- Single-case mode allows the system to set global access points, optimize and share access to resources.

- Avoid multiple occupation of resources, avoid simultaneous operation on the same resource file, resulting in inconsistent file form.

## disadvantages

- Single-case patterns generally have no interfaces, extensions are difficult, and there is basically no second way to extend them, except to modify the code.

## scenario

- The system requires only one instance object, such as a unique serial number generator or resource manager, or only one object that is allowed to be created because the resource consumption is too high.

- Objects that take too much time or resources to create, but are often used.

- Objects that need to be instantiated frequently and then destroyed.

## Implementation points

- The constructor is private

- Provides a public method, such as the getInstance method, for obtaining a single case

## Summary

The purpose of a single-case pattern is to ensure that a class has only one instance and provide a global access point to it. Because the single-case pattern has only one instance in memory, the benefits of the single-case pattern are obvious because memory expenses are reduced, especially when an object needs to be created, destroyed frequently, and performance cannot be optimized when created or destroyed.
