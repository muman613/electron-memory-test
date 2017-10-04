# electron memory test
This project was started to explore issues regarding memory allocation by the **Electron/NodeJS** system.

## Problem
It appears as if there is a limitation in the system regarding allocation of the `ArrayBuffer` object. This limitation results in the AOMAnalyzer decoder component being unable to allocate enough HEAP memory for the decode process.

The current limitation of **Electron** seems to be ~2Gb. Any attempt to allocate more memory than this limit results in a `RangeError: Array buffer allocation failed` exception.

The problem is that our decoder, according to profiling, appears to use at least ~5Gb of memory to decode 4Kx2K streams.

## Application Operation

1) Start the application<br><pre>npm install<br>./node_modules/.bin/electron .
2) The default settings will demonstrate the limitation. The memory size is initialized to 2GB. This value can be changed or specified in Gb/Mb/Kb according to the selected option.
3) Hit the 'Allocate' button.
4) If the allocation succeeded the confirmation __Allocated # bytes__ is displayed. If the allocation fails then the status __Allocation of buffer failed__ is displayed.

## Software Version Information
This problem was verified with the following versions:

| Component | Version |
| --------- | ------- |
| nodejs    | v8.5.0  |
| npm       | 5.2.0   |
| electron  | v1.7.8  |
