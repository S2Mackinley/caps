# ![cf](https://i.imgur.com/7v5ASc8.png) Lab 11: CAPS

![example workflow](https://github.com/S2Mackinley/caps/actions/workflows/node.yml/badge.svg)

Author: Elijah Prom Version: 1.0.0

---

## Overview

A delievery app that lets you know when something was delivered

to run type: `node caps.js`

---

## User Stories

### Owner

* As products are sold that need to be delivered, we need to alert the drivers that a package is ready for pickup/delivery

* As a driver picks up a package, the store owner should know that the package is now “in transit”

* Once the driver delivers a package, the store owner should know that the package has been delivered

### Delivery Driver

* As stores sell product and need a package delivered, Drivers need an instant notification to pick the package up

* Drivers need a way to scan a package and alert the vendors that the package is in transit

* Drivers need a way to scan a package and alert the vendors that the package has been delivered

### Company

* We don’t want our clients having to refresh their browser to get the latest status updates

* We also are aware that they will not always have their browser open

  * So, if they leave & come back, it’s imperative that they can the state of things since they last logged in

---

## User stories

* As a vendor, I want to alert the system when I have a package to be picked up

* As a driver, I want to be notified when there is a package to be delivered

* As a driver, I want to alert the system when I have picked up a package and it is in transit

* As a driver, I want to alert the system when a package has been delivered

* As a vendor, I want to be notified when my package has been delivered

* As a developer, I want to use industry standards for managing the state of each package

* As a developer, I want to create an event driven system so that I can write code that happens in response to events, in real time

---

## Phase 1 Requirements

Today, we begin the first of a 4-Phase build of the CAPS system, written in Node.js. In this first phase, our goal is to setup a system of events and handlers, with the intent being to change out the eventing system as we go, but keeping the handlers themselves largely the same. The task of “delivering a package” doesn’t change (the handler), even if the mechanism for triggering that task (the event) does.

---