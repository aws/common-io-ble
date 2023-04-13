## Common IO - BLE

Common IO - BLE provides an abstraction layer which offer a common set of APIs to control the device, perform GAP and GATT operations.

**bt_hal_manager.h** : Contains the interface to control the Bluetooth device, perform device discovery operations and other connectivity related tasks.

**bt_hal_manager_adapter_ble.h** : Contains the interface for the GAP API functions that are specific to BLE.

**bt_hal_manager_adapter_classic.h** : Contains the interface to control BT classic functionalities of a device.

**bt_hal_gatt_server.h** : Contains the interface to use Bluetooth GATT server feature.

**bt_hal_gatt_client.h** : Contains the interface to use Bluetooth GATT client feature.

**bt_hal_avsrc_profile.h** : Contains the interface for A2DP Source profile for the local device.

## Contributing

See [CONTRIBUTING.md](./.github/CONTRIBUTING.md) for information on contributing.

## Security

See [SECURITY](SECURITY.md) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.

