# Overview

This package contains the inferfaces that you must implement to create a connector for [React Storefront](https://docs.reactstorefront.io/). Connectors allow developers to easily create a React Storefront front-end for popular ecommerce platforms such as Magento.

A connector package explorts an implementation of [Connector](interfaces/_connector_.connector.html) as it's default export.

## Core Concepts

- Each `Connector` method represents an API called made by a typical React Storefront application.
- Most methods returns a `Result`, which contains both app and page level data. App data is used to populate the main menu, navigation tabs, etc..., while page data is used to render the main body the specific page being viewed (product data, category data, etc...).
- App level data only needs to be included when connector methods are called during server-side rendering. During server-side rendering, the request will contain the `_includeAppData=1` query parameter. The `react-storefront` package provides [fulfillAPIRequest](https://docs.reactstorefront.io/apiReference/props/fulfillAPIRequest) method to help you return app data only during server-side rendering. You can see it in use in `react-storefront-magento2-connector` in the [withAppData higher-order function](https://github.com/react-storefront-foundation/magento2-connector/blob/master/src/app/withAppData.js#L5), which is used connector methods like [product](https://github.com/react-storefront-foundation/magento2-connector/blob/master/src/product/product.js#L6).
- Connectors can contain additional methods beyond those specified in `react-storefront-connector`, but the default React Storefront starter app won't make use of them. Developers will need to add functionality to the app to take advantage of additional methods in the connector.

## Example Implementation

For a reference implementation see [react-storefront-magento2-connector](https://github.com/react-storefront-foundation/magento2-connector).
