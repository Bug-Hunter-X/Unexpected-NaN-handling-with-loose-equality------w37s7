# JavaScript Loose Equality and NaN

This repository demonstrates a common JavaScript pitfall: unexpected behavior when using loose equality (==) with NaN (Not a Number).  The provided code shows how comparing NaN with null using loose equality fails to distinguish them, and offers a solution to correct this behavior.

## Bug Description

The function `foo` intends to handle null values differently. However, the loose equality check (`==`) does not differentiate between `NaN` and `null`, so `NaN` is treated as `0` unexpectedly. 

## Solution

The solution uses strict equality (`===`) to correctly handle the cases and ensure `NaN` is handled properly.