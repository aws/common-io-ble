var group__bt__hal__struct__types =
[
    [ "BTAvsrcCallbacks_t", "struct_b_t_avsrc_callbacks__t.html", [
      [ "xSize", "struct_b_t_avsrc_callbacks__t.html#a5729feae6cfcd7f00596ab700856b850", null ],
      [ "xConnStateCback", "struct_b_t_avsrc_callbacks__t.html#a779a43b73cf5f74117d08f12f1d9beb1", null ],
      [ "xAudioStateCback", "struct_b_t_avsrc_callbacks__t.html#abf1f6cc04492c674f0edc44a9d68e10e", null ],
      [ "xAclPriorityCback", "struct_b_t_avsrc_callbacks__t.html#a0943c248baa2d308cd49633e229aabf1", null ]
    ] ],
    [ "BTAvsrcInterface_t", "struct_b_t_avsrc_interface__t.html", [
      [ "xSize", "struct_b_t_avsrc_interface__t.html#adf99d6299c1a7a7c0b1c86804b025127", null ],
      [ "pxAvsrcInit", "struct_b_t_avsrc_interface__t.html#aff1524bb2340429561740ac76521e02c", null ],
      [ "pxAvsrcCleanup", "struct_b_t_avsrc_interface__t.html#aab8e4aabb2e1fc484bd4d142a2adcb27", null ],
      [ "pxAvsrcConnect", "struct_b_t_avsrc_interface__t.html#a86d6f0c659f9dd23d02a6e4027d1ea9c", null ],
      [ "pxAvsrcDisconnect", "struct_b_t_avsrc_interface__t.html#a73a87bac5a1aa3bd2541f92a95b82f19", null ]
    ] ],
    [ "BTGattUnformattedValue_t", "struct_b_t_gatt_unformatted_value__t.html", [
      [ "ucValue", "struct_b_t_gatt_unformatted_value__t.html#a76b5b2c606af97740d219b21b94841a6", null ],
      [ "usLen", "struct_b_t_gatt_unformatted_value__t.html#a4ca59825c50b815e4fa5efb7e2ffc089", null ]
    ] ],
    [ "BTGattReadParams_t", "struct_b_t_gatt_read_params__t.html", [
      [ "usHandle", "struct_b_t_gatt_read_params__t.html#a5a92d2e50180d63b9409aca07b59e42c", null ],
      [ "xValue", "struct_b_t_gatt_read_params__t.html#abdbb6ddc9476b64e7a5279c8c7e3a5a4", null ],
      [ "usValueType", "struct_b_t_gatt_read_params__t.html#a626a7073c7208e68c9cc7758ad167a3e", null ],
      [ "ucStatus", "struct_b_t_gatt_read_params__t.html#a4cf4fbfd7a19d32c6aa948c0b439f71c", null ]
    ] ],
    [ "BTGattWriteParams_t", "struct_b_t_gatt_write_params__t.html", [
      [ "xSrvcId", "struct_b_t_gatt_write_params__t.html#a02dec6b20798db1278dd7c250571c529", null ],
      [ "xCharId", "struct_b_t_gatt_write_params__t.html#a1f54832f2daa3f34a79297a2ae69211e", null ],
      [ "xDescrId", "struct_b_t_gatt_write_params__t.html#a93fb25ac2940244b0e93c506dd4a5e1d", null ],
      [ "ucStatus", "struct_b_t_gatt_write_params__t.html#a5695ef4af33765e3ac88812230b43504", null ]
    ] ],
    [ "BTGattNotifyParams_t", "struct_b_t_gatt_notify_params__t.html", [
      [ "ucValue", "struct_b_t_gatt_notify_params__t.html#aff420326a35508ccaa48e92ca05981f4", null ],
      [ "xBda", "struct_b_t_gatt_notify_params__t.html#a8de9c78029b5b9ed38be4f4364aa5081", null ],
      [ "usHandle", "struct_b_t_gatt_notify_params__t.html#ad8d8eb7b5c4033a87e171f57b06e3d0a", null ],
      [ "xLen", "struct_b_t_gatt_notify_params__t.html#a7c4f7c154ac263459500cee27a200a1a", null ],
      [ "bIsNotify", "struct_b_t_gatt_notify_params__t.html#a9336cab2f60847dca1b489e1b6e6b971", null ]
    ] ],
    [ "BTGattTestParams_t", "struct_b_t_gatt_test_params__t.html", [
      [ "pxBda1", "struct_b_t_gatt_test_params__t.html#a27969e0bc2f37e5cc2d4dff82068c5b4", null ],
      [ "pxUuid1", "struct_b_t_gatt_test_params__t.html#a49cf6b12391cfa0f36a892eef4d60458", null ],
      [ "usU1", "struct_b_t_gatt_test_params__t.html#a75466aa96e0173fa5e6b2389d4a0eeff", null ],
      [ "usU2", "struct_b_t_gatt_test_params__t.html#ac01a3301dbc19d82fad2dc3c716d7205", null ],
      [ "usU3", "struct_b_t_gatt_test_params__t.html#ad9cfe180ee3633c7e068a635bd3ebb7d", null ],
      [ "usU4", "struct_b_t_gatt_test_params__t.html#a5e4ad5e26d30b18c9ab731a60cad7d76", null ],
      [ "usU5", "struct_b_t_gatt_test_params__t.html#af0b5aa1d09af39e4d8ae297c14622068", null ]
    ] ],
    [ "BTGattClientCallbacks_t", "struct_b_t_gatt_client_callbacks__t.html", [
      [ "pxRegisterClientCb", "struct_b_t_gatt_client_callbacks__t.html#ab49173a46d0c43159783069e5ec2304c", null ],
      [ "pxOpenCb", "struct_b_t_gatt_client_callbacks__t.html#ab7e2ce9d56ae158ccd1cf9ce78cb0849", null ],
      [ "pxCloseCb", "struct_b_t_gatt_client_callbacks__t.html#a040bfdf3f92e79133266dfb58bed976b", null ],
      [ "pxSearchCompleteCb", "struct_b_t_gatt_client_callbacks__t.html#ab3ffefc41e623008d00ceab1460c4a69", null ],
      [ "pxRegisterForNotificationCb", "struct_b_t_gatt_client_callbacks__t.html#ac32c18f88e9d080e65913fe98c5bddb5", null ],
      [ "pxNotifyCb", "struct_b_t_gatt_client_callbacks__t.html#a0190866154d554d9404858bebf550fa2", null ],
      [ "pxReadCharacteristicCb", "struct_b_t_gatt_client_callbacks__t.html#ac5caa39c933de3a469b1a24c692d1169", null ],
      [ "pxWriteCharacteristicCb", "struct_b_t_gatt_client_callbacks__t.html#a694001ab1e6ddeabf46844ae86a620b2", null ],
      [ "pxReadDescriptorCb", "struct_b_t_gatt_client_callbacks__t.html#a3710e28ae9acd413237e33306c19ee72", null ],
      [ "pxWriteDescriptorCb", "struct_b_t_gatt_client_callbacks__t.html#a6f9eb946939d72221bbd303832667614", null ],
      [ "pxExecuteWriteCb", "struct_b_t_gatt_client_callbacks__t.html#adc7d4ea08b5868f41c0a8a54fc9eb6e2", null ],
      [ "pxReadRemoteRssiCb", "struct_b_t_gatt_client_callbacks__t.html#a77902e3ec2cddc651bea3fbe2756a3b8", null ],
      [ "pxListenCb", "struct_b_t_gatt_client_callbacks__t.html#a4842984d34259cb20e35cddd44dd43bc", null ],
      [ "pxConfigureMtuCb", "struct_b_t_gatt_client_callbacks__t.html#a22f23b5264bb270cdeed02a24c62d9c5", null ],
      [ "pxCongestionCb", "struct_b_t_gatt_client_callbacks__t.html#ac275bb7fd7c6cfba7ab0fe7fb03bec0d", null ],
      [ "pxGetGattDbCb", "struct_b_t_gatt_client_callbacks__t.html#aa65ff95e8da0a4cfd0977e46cb78dadb", null ],
      [ "pxServicesRemovedCb", "struct_b_t_gatt_client_callbacks__t.html#a9e7765de59f2599ce9e5ed645ca0f47b", null ],
      [ "pxServicesAddedCb", "struct_b_t_gatt_client_callbacks__t.html#a9400457d53c89420ff2a02b437cf9461", null ]
    ] ],
    [ "BTGattClientInterface_t", "struct_b_t_gatt_client_interface__t.html", [
      [ "pxRegisterClient", "struct_b_t_gatt_client_interface__t.html#ae76209b0a81b9cad924ff0980e4ac679", null ],
      [ "pxUnregisterClient", "struct_b_t_gatt_client_interface__t.html#ab564cc61580a575d9f44cd6b07b9903c", null ],
      [ "pxGattClientInit", "struct_b_t_gatt_client_interface__t.html#abf37d8725dc644509bf785fd7b8d62ca", null ],
      [ "pxConnect", "struct_b_t_gatt_client_interface__t.html#a189119b1cb4d710d30493c54150be6bf", null ],
      [ "pxDisconnect", "struct_b_t_gatt_client_interface__t.html#afbb0d5775b77b1a8742e722a96595c2c", null ],
      [ "pxRefresh", "struct_b_t_gatt_client_interface__t.html#a63df2f8a89c5193090b8fb60f098497e", null ],
      [ "pxSearchService", "struct_b_t_gatt_client_interface__t.html#a776d99c4e491e81b22d51837a8d94f97", null ],
      [ "pxReadCharacteristic", "struct_b_t_gatt_client_interface__t.html#a97f089ffb7597fa5e5fc65ec22f2ba18", null ],
      [ "pxWriteCharacteristic", "struct_b_t_gatt_client_interface__t.html#afd26e8c60b7b1e9d4095c712bf83a6e6", null ],
      [ "pxReadDescriptor", "struct_b_t_gatt_client_interface__t.html#a985bcf586389c700a638e2bc294357ff", null ],
      [ "pxWriteDescriptor", "struct_b_t_gatt_client_interface__t.html#a5c5cb1eb1504fb1270ff711b5169ee25", null ],
      [ "pxExecuteWrite", "struct_b_t_gatt_client_interface__t.html#ae9b2e728903294840b0753223153d677", null ],
      [ "pxRegisterForNotification", "struct_b_t_gatt_client_interface__t.html#a25d0ee1e36f8ee205df9eb317cd716c9", null ],
      [ "pxUnregisterForNotification", "struct_b_t_gatt_client_interface__t.html#a71e20493f1f5ad25165a4093d6d1b043", null ],
      [ "pxReadRemoteRssi", "struct_b_t_gatt_client_interface__t.html#abee2580c727fba2e4b342108710bd087", null ],
      [ "pxGetDeviceType", "struct_b_t_gatt_client_interface__t.html#a779ccfc8ee36f1774bafff5ba28aaf23", null ],
      [ "pxConfigureMtu", "struct_b_t_gatt_client_interface__t.html#a7a58ea0b879d455b2d8d0258f295970a", null ],
      [ "pxTestCommand", "struct_b_t_gatt_client_interface__t.html#a55df591b382147960e24eb2da4e28868", null ],
      [ "pxGetGattDb", "struct_b_t_gatt_client_interface__t.html#aeec91ee1263cab5310807f59a68b0a88", null ]
    ] ],
    [ "BTGattValue_t", "struct_b_t_gatt_value__t.html", [
      [ "usHandle", "struct_b_t_gatt_value__t.html#a605dc7334f2197b0adbaf5ac03ac8f35", null ],
      [ "pucValue", "struct_b_t_gatt_value__t.html#acf8a8836892a1d9ea675095b93d60da5", null ],
      [ "usOffset", "struct_b_t_gatt_value__t.html#a73e46ec3c59812457268214f5fb757a9", null ],
      [ "xLen", "struct_b_t_gatt_value__t.html#acd1b33c092cc58701390f5bbd1caf194", null ],
      [ "xRspErrorStatus", "struct_b_t_gatt_value__t.html#a70c5add3ce41d62c1fa3301c6f31919c", null ]
    ] ],
    [ "BTGattServerCallbacks_t", "struct_b_t_gatt_server_callbacks__t.html", [
      [ "pxRegisterServerCb", "struct_b_t_gatt_server_callbacks__t.html#a2f99ecfab18e3ba06cdfedbd2af7be93", null ],
      [ "pxUnregisterServerCb", "struct_b_t_gatt_server_callbacks__t.html#a2ecc8f82ff90b476257b81d082d3de8f", null ],
      [ "pxConnectionCb", "struct_b_t_gatt_server_callbacks__t.html#a6c90f321b9ae68033534142d77316132", null ],
      [ "pxServiceAddedCb", "struct_b_t_gatt_server_callbacks__t.html#adfb89945d833354dad6e7ea76004cfe5", null ],
      [ "pxIncludedServiceAddedCb", "struct_b_t_gatt_server_callbacks__t.html#a4bb3afdc3b33b8f48b841c37d5787806", null ],
      [ "pxCharacteristicAddedCb", "struct_b_t_gatt_server_callbacks__t.html#a95801600f497e5bb7d8f62919033fafb", null ],
      [ "pxSetValCallbackCb", "struct_b_t_gatt_server_callbacks__t.html#a2ddae546e66ae9324d5c79a5e409364c", null ],
      [ "pxDescriptorAddedCb", "struct_b_t_gatt_server_callbacks__t.html#a1291611d6b47ffefa2bfc30850ba3095", null ],
      [ "pxServiceStartedCb", "struct_b_t_gatt_server_callbacks__t.html#a3c5f624cd8ff6e2e294b0fdeb7ab79e3", null ],
      [ "pxServiceStoppedCb", "struct_b_t_gatt_server_callbacks__t.html#a307d3978e47526b1b96e82d9113a56ea", null ],
      [ "pxServiceDeletedCb", "struct_b_t_gatt_server_callbacks__t.html#a9fde7ed0b5a39d37442a695d960bb245", null ],
      [ "pxRequestReadCb", "struct_b_t_gatt_server_callbacks__t.html#adcf529f4317ea6e36c1cb952b2cd270e", null ],
      [ "pxRequestWriteCb", "struct_b_t_gatt_server_callbacks__t.html#ae1f4926ce526997d41117d69d23fc33e", null ],
      [ "pxRequestExecWriteCb", "struct_b_t_gatt_server_callbacks__t.html#a874ce02233d69ae94ec94709e3dfcb45", null ],
      [ "pxResponseConfirmationCb", "struct_b_t_gatt_server_callbacks__t.html#a5965da33e9b556052f52adc02380a3b0", null ],
      [ "pxIndicationSentCb", "struct_b_t_gatt_server_callbacks__t.html#a4c33bdfce1b3f0da8fe32bba4555379c", null ],
      [ "pxCongestionCb", "struct_b_t_gatt_server_callbacks__t.html#a9650cbec7d2d0a32a566a4fcfee0eed9", null ],
      [ "pxMtuChangedCb", "struct_b_t_gatt_server_callbacks__t.html#ab78adb4f11351a13e4918895524b1d6a", null ],
      [ "pxBTWhiteListChangedCb", "struct_b_t_gatt_server_callbacks__t.html#a1f301acdf37471e8e0cb74634a079456", null ]
    ] ],
    [ "BTGattServerInterface_t", "struct_b_t_gatt_server_interface__t.html", [
      [ "pxRegisterServer", "struct_b_t_gatt_server_interface__t.html#a55adfd9d39c24ea95e722ee19b92c707", null ],
      [ "pxUnregisterServer", "struct_b_t_gatt_server_interface__t.html#a6f4cc5ca9e9799910bbefb0f2737a5e6", null ],
      [ "pxGattServerInit", "struct_b_t_gatt_server_interface__t.html#a42a3400944af1c5f7b8b78855f3a220a", null ],
      [ "pxConnect", "struct_b_t_gatt_server_interface__t.html#aaca7b845467b9a4a570bcc9985e35ba8", null ],
      [ "pxDisconnect", "struct_b_t_gatt_server_interface__t.html#a83d44b474c9877781cb284b3bda3f1ee", null ],
      [ "pxAddServiceBlob", "struct_b_t_gatt_server_interface__t.html#a103bb31250bba64fe8160453ee0db05b", null ],
      [ "pxAddService", "struct_b_t_gatt_server_interface__t.html#a05b5b6f11586d440fec332781774a7c7", null ],
      [ "pxAddIncludedService", "struct_b_t_gatt_server_interface__t.html#ac7a48ef6894a74b0be3af86727076e6f", null ],
      [ "pxAddCharacteristic", "struct_b_t_gatt_server_interface__t.html#a131fa43962fa0cb809d5830a61d1966d", null ],
      [ "pxSetVal", "struct_b_t_gatt_server_interface__t.html#a7c7e009b82703e415f010883259041f3", null ],
      [ "pxAddDescriptor", "struct_b_t_gatt_server_interface__t.html#a9781ea7da261091d06a14b3f81d81b59", null ],
      [ "pxStartService", "struct_b_t_gatt_server_interface__t.html#a1d179b736b2cd536c3088c1a75bbf31e", null ],
      [ "pxStopService", "struct_b_t_gatt_server_interface__t.html#a1f82aab30b0f62744518e6b4024f7095", null ],
      [ "pxDeleteService", "struct_b_t_gatt_server_interface__t.html#a5482f5156ae62f021bdf4181b043de00", null ],
      [ "pxSendIndication", "struct_b_t_gatt_server_interface__t.html#ae82d0fb6846374c6aee977660f7f94fb", null ],
      [ "pxSendResponse", "struct_b_t_gatt_server_interface__t.html#a2ef3818260cf8e113516dc39b9a2ee4e", null ],
      [ "pxReconnect", "struct_b_t_gatt_server_interface__t.html#a7e2de12f037c2e00a0e9c48b100f9f5b", null ],
      [ "pxAddDevicesToWhiteList", "struct_b_t_gatt_server_interface__t.html#ae13a12e081ecccd003641b88b06d0fac", null ],
      [ "pxRemoveDevicesFromWhiteList", "struct_b_t_gatt_server_interface__t.html#a3da27a99e7823081860c5b6f070e2aa4", null ],
      [ "pxConfigureMtu", "struct_b_t_gatt_server_interface__t.html#a6986cf9ed9a8488b5d0a0e9c970408ff", null ]
    ] ],
    [ "BTGattInstanceId_t", "struct_b_t_gatt_instance_id__t.html", [
      [ "xUuid", "struct_b_t_gatt_instance_id__t.html#a1cf0f7bf0056a488cb7d72b718d2ed27", null ],
      [ "ucInstId", "struct_b_t_gatt_instance_id__t.html#a1f7290d77f969852a225403a70b2d438", null ]
    ] ],
    [ "BTGattSrvcId_t", "struct_b_t_gatt_srvc_id__t.html", [
      [ "xId", "struct_b_t_gatt_srvc_id__t.html#ad440134db0ac0bfda80f6dc22c0519e5", null ],
      [ "xServiceType", "struct_b_t_gatt_srvc_id__t.html#a511dbdc4ab4aa323d7ffe76509fc09ac", null ]
    ] ],
    [ "BTGattTrackAdvInfo_t", "struct_b_t_gatt_track_adv_info__t.html", [
      [ "ucClientIf", "struct_b_t_gatt_track_adv_info__t.html#ab6a37f12669573a7ad24b571807d5c50", null ],
      [ "ucFiltIndex", "struct_b_t_gatt_track_adv_info__t.html#aeabdc217799b08220f95344e4fa9943f", null ],
      [ "ucAdvertiserState", "struct_b_t_gatt_track_adv_info__t.html#a4526e36767287b8f813cd175ea2f22d4", null ],
      [ "ucAdvertiserInfoPresent", "struct_b_t_gatt_track_adv_info__t.html#a048510ef73d45f36542a80d11f072613", null ],
      [ "ucAddrType", "struct_b_t_gatt_track_adv_info__t.html#af3227f1664bfe68c72c2ad68f76796ea", null ],
      [ "ucTxPower", "struct_b_t_gatt_track_adv_info__t.html#a8da4134591434c7681dbf06967a4beaa", null ],
      [ "cRssiValue", "struct_b_t_gatt_track_adv_info__t.html#a742b748d00199e76e6ea80cd67b2e747", null ],
      [ "usTimeStamp", "struct_b_t_gatt_track_adv_info__t.html#a33ba1f1caa3e8751c221d9132f169d43", null ],
      [ "xBdAddr", "struct_b_t_gatt_track_adv_info__t.html#a0311adbf055db532796c4e2d69f984c1", null ],
      [ "ucAdvPktLen", "struct_b_t_gatt_track_adv_info__t.html#ae8a0c18ffb675101c46b6abfd526af33", null ],
      [ "pucAdvPktData", "struct_b_t_gatt_track_adv_info__t.html#a16e2947f31480ca6087ec5598b18981e", null ],
      [ "xScanRspLen", "struct_b_t_gatt_track_adv_info__t.html#a3f8a0506a7a25215736d9557a0520cff", null ],
      [ "pucScanRspData", "struct_b_t_gatt_track_adv_info__t.html#ab461bfa69c2f430c9bb8af7fc735b79e", null ]
    ] ],
    [ "BTCharacteristic_t", "struct_b_t_characteristic__t.html", [
      [ "xUuid", "struct_b_t_characteristic__t.html#ac14f5c53b54a96e534d6afe49ccf6e09", null ],
      [ "xProperties", "struct_b_t_characteristic__t.html#a37b8821900e810fb2e85d5f53b96d905", null ],
      [ "xPermissions", "struct_b_t_characteristic__t.html#ade872337b5de7404c5bf49fc512fb095", null ]
    ] ],
    [ "BTCharacteristicDescr_t", "struct_b_t_characteristic_descr__t.html", [
      [ "xUuid", "struct_b_t_characteristic_descr__t.html#a34dc2401254420655cce112977399426", null ],
      [ "xPermissions", "struct_b_t_characteristic_descr__t.html#a7722f6379b92d5e33dc6fe7348872ef7", null ]
    ] ],
    [ "BTIncludedService_t", "struct_b_t_included_service__t.html", [
      [ "xUuid", "struct_b_t_included_service__t.html#a9dc372c249bbccb1294fda2f67cf64bf", null ],
      [ "pxPtrToService", "struct_b_t_included_service__t.html#a23f71d33c39b2c21c3fe85ebe6577bfd", null ]
    ] ],
    [ "BTAttribute_t", "struct_b_t_attribute__t.html", [
      [ "xAttributeType", "struct_b_t_attribute__t.html#a0490d026eccb9eb26efff5ad18aadbf2", null ],
      [ "xServiceUUID", "struct_b_t_attribute__t.html#ac72404ae71f0eead3501f7b23ffd99df", null ],
      [ "xCharacteristic", "struct_b_t_attribute__t.html#a7c4b50f5ef7d7fc2afa8693e620477e7", null ],
      [ "xCharacteristicDescr", "struct_b_t_attribute__t.html#a25e48bff16215bc3dbaaeb949487641a", null ],
      [ "xIncludedService", "struct_b_t_attribute__t.html#a5684b929ebe610fa4d425c26931abbed", null ]
    ] ],
    [ "BTService_t", "struct_b_t_service.html", [
      [ "ucInstId", "struct_b_t_service.html#a6a4496be8f70678b0f2f647a1bba742e", null ],
      [ "xType", "struct_b_t_service.html#ad8f5dbcc3eb38ff5e444b68e34956343", null ],
      [ "xNumberOfAttributes", "struct_b_t_service.html#a51ff8c8becf8ca050c58ab949ef43207", null ],
      [ "pusHandlesBuffer", "struct_b_t_service.html#a1baac82500b45647340d16caeacc4d16", null ],
      [ "pxBLEAttributes", "struct_b_t_service.html#a9fa4489965ba5cfbe15e751630104605", null ]
    ] ],
    [ "BTGattDbElement_t", "struct_b_t_gatt_db_element__t.html", [
      [ "usId", "struct_b_t_gatt_db_element__t.html#a985fb6f40277a996baaf6029a9facefa", null ],
      [ "xUuid", "struct_b_t_gatt_db_element__t.html#afb36c242d3c7bdf2bb91557b6e7b182c", null ],
      [ "xType", "struct_b_t_gatt_db_element__t.html#afb2ddf672dc76654ad950ea22c6601fd", null ],
      [ "usAttributeHandle", "struct_b_t_gatt_db_element__t.html#af1449e006c3e8c7fd83269b97726ea75", null ],
      [ "usStartHandle", "struct_b_t_gatt_db_element__t.html#a2afbf3b20c55807e49555f51e5308a91", null ],
      [ "usEndHandle", "struct_b_t_gatt_db_element__t.html#a96b9f9e1f8dced44c8d15f8b806e6e04", null ],
      [ "ucProperties", "struct_b_t_gatt_db_element__t.html#aab3f208256f7a7fb7fd94417507a82d0", null ]
    ] ],
    [ "BTPinCode_t", "struct_b_t_pin_code__t.html", [
      [ "ucPin", "struct_b_t_pin_code__t.html#ae940888bb9e44b8ce3bce2fff2b342b1", null ]
    ] ],
    [ "BTProperty_t", "struct_b_t_property__t.html", [
      [ "xType", "struct_b_t_property__t.html#aeb3789c0849e271fbee573a42e7e6007", null ],
      [ "xLen", "struct_b_t_property__t.html#aaf22e408c8ac6747581b8a0297a61a60", null ],
      [ "pvVal", "struct_b_t_property__t.html#a4c14b7786b15ec6bbd9015e10de5ba4e", null ]
    ] ],
    [ "BTOutOfBandData_t", "struct_b_t_out_of_band_data__t.html", [
      [ "ucBleDevAddr", "struct_b_t_out_of_band_data__t.html#a5106639d438d240281b6f7167911f5d4", null ],
      [ "ucC192", "struct_b_t_out_of_band_data__t.html#a274638935d3db6d377eab69911472aff", null ],
      [ "ucR192", "struct_b_t_out_of_band_data__t.html#ae51ab18aac78376c9f087af57063e725", null ],
      [ "ucC256", "struct_b_t_out_of_band_data__t.html#a33b8a7f10b021b0929a18112421dac60", null ],
      [ "ucR256", "struct_b_t_out_of_band_data__t.html#aee1827a07471c9a06cc5368fdb788333", null ],
      [ "ucSm_tk", "struct_b_t_out_of_band_data__t.html#a79dc1d7fd716f58742784f4ce7cc478f", null ],
      [ "ucLe_sc_c", "struct_b_t_out_of_band_data__t.html#a3f6644a5e2cd0b553cb4dd87764c2e2e", null ],
      [ "ucLe_sc_r", "struct_b_t_out_of_band_data__t.html#aa9bb44d71b062261d17b0b63d8aefd94", null ]
    ] ],
    [ "BTActivityEnergyInfo", "struct_b_t_activity_energy_info.html", [
      [ "ucStatus", "struct_b_t_activity_energy_info.html#a8d4be21e87c2cbc9c790d3ce111a5d99", null ],
      [ "ucCtrlState", "struct_b_t_activity_energy_info.html#ac2f82f65206972c98209029f25cadf70", null ],
      [ "ullTxTime", "struct_b_t_activity_energy_info.html#a24452b384c1db85686281a7551c5077f", null ],
      [ "ullRxTime", "struct_b_t_activity_energy_info.html#a01ae3cc97d86afa472925cf89f940675", null ],
      [ "ullIdleTime", "struct_b_t_activity_energy_info.html#ae39c0734fd25e9b0fc72389d0cc47799", null ],
      [ "ullEnergyUsed", "struct_b_t_activity_energy_info.html#afc6af5ddecc2b72118e2bf6b8ae00672", null ]
    ] ],
    [ "BTUidTraffic_t", "struct_b_t_uid_traffic__t.html", [
      [ "lAppUid", "struct_b_t_uid_traffic__t.html#a031355f34702fa1e0d9eef01320470d4", null ],
      [ "ullTxBytes", "struct_b_t_uid_traffic__t.html#a597118f52fca200914f1ebb5436e232f", null ],
      [ "ullRxBytes", "struct_b_t_uid_traffic__t.html#a074ac202274e3531fa5531a63b1dc8f2", null ]
    ] ],
    [ "BTCallbacks_t", "struct_b_t_callbacks__t.html", [
      [ "pxDeviceStateChangedCb", "struct_b_t_callbacks__t.html#a871f4bd7c75e5b5202631d665d25f57b", null ],
      [ "pxAdapterPropertiesCb", "struct_b_t_callbacks__t.html#a4198f6b723a5a1f8c678e4fac9785cd3", null ],
      [ "pxRemoteDevicePropertiesCb", "struct_b_t_callbacks__t.html#ad885d90756d72ae936f1b6cd8ca4927c", null ],
      [ "pxPinRequestCb", "struct_b_t_callbacks__t.html#a0439be7367c5060c7826e0e14b528569", null ],
      [ "pxSspRequestCb", "struct_b_t_callbacks__t.html#a6a669db7c7359dd670ad70408ec67a1a", null ],
      [ "pxPairingStateChangedCb", "struct_b_t_callbacks__t.html#a37decd33a76fd5d8bc753c2a59a0436f", null ],
      [ "pxBondedCb", "struct_b_t_callbacks__t.html#ac8775aa59fa840088b938e337a20f927", null ],
      [ "pxDutModeRecvCb", "struct_b_t_callbacks__t.html#a72592ac46fdae13e07d12d21a3240ed7", null ],
      [ "pxleTestModeCb", "struct_b_t_callbacks__t.html#a4e3cb8db34f7aad3088f5450017b79fe", null ],
      [ "pxEnergyInfoCb", "struct_b_t_callbacks__t.html#a25ebc43d99c335c49ed1453ad712a7be", null ],
      [ "pxReadRssiCb", "struct_b_t_callbacks__t.html#a48d89df97440dbac2ce814e577cf9c00", null ],
      [ "pxTxPowerCb", "struct_b_t_callbacks__t.html#af099767538ce25d89e2c8192cf4ff42f", null ],
      [ "pxSlaveSecurityRequestCb", "struct_b_t_callbacks__t.html#a79afdee92a9a273e32d164c3a8313cee", null ],
      [ "pxAclStateChangedCb", "struct_b_t_callbacks__t.html#a4ac87e0959a80bd88c9a317139c07a41", null ]
    ] ],
    [ "BTInterface_t", "struct_b_t_interface__t.html", [
      [ "pxBtManagerInit", "struct_b_t_interface__t.html#a662f33220ffc01fc273ce7ffeed19c14", null ],
      [ "pxBtManagerCleanup", "struct_b_t_interface__t.html#aebd19c9016344594f78f724204bfa790", null ],
      [ "pxEnable", "struct_b_t_interface__t.html#a5d73017089b988ec78e0877968e932f3", null ],
      [ "pxDisable", "struct_b_t_interface__t.html#a8009f4bb574525e3c7ba0a11d3479541", null ],
      [ "pxGetAllDeviceProperties", "struct_b_t_interface__t.html#a34f2b2e39677009990b4028dd78cd218", null ],
      [ "pxGetDeviceProperty", "struct_b_t_interface__t.html#ac31636dec64de1fc0b83d0d96266237a", null ],
      [ "pxSetDeviceProperty", "struct_b_t_interface__t.html#a30bc2ae98e6b605acf25857ed5d330f6", null ],
      [ "pxGetAllRemoteDeviceProperties", "struct_b_t_interface__t.html#a142a68f18dba179c99f6037de9176907", null ],
      [ "pxGetRemoteDeviceProperty", "struct_b_t_interface__t.html#a04f453a1d50823fbf2af217830c3e63e", null ],
      [ "pxSetRemoteDeviceProperty", "struct_b_t_interface__t.html#ad0e347042ebdf96501cbd1a335d6ecd8", null ],
      [ "pxPair", "struct_b_t_interface__t.html#aa8a8a91aa35aaff8f29a2ab5fe9b0f49", null ],
      [ "pxCreateBondOutOfBand", "struct_b_t_interface__t.html#a57c9828dc836ba14c4f0db6c73bed4cc", null ],
      [ "pxSendSlaveSecurityRequest", "struct_b_t_interface__t.html#add7506f12c6d990aae7f646840c00560", null ],
      [ "pxCancelBond", "struct_b_t_interface__t.html#aa814929249746104e42cd7c3f56b7d2d", null ],
      [ "pxRemoveBond", "struct_b_t_interface__t.html#a54c840f7b974aa9659453cf5f4338b6b", null ],
      [ "pxGetConnectionState", "struct_b_t_interface__t.html#afb9d2c3aa0908f0ead68166df039a73f", null ],
      [ "pxPinReply", "struct_b_t_interface__t.html#a2972bac1da2941fcdda4b94c8334e371", null ],
      [ "pxSspReply", "struct_b_t_interface__t.html#a47b952aae24d55b22255463bde60ef1d", null ],
      [ "pxReadEnergyInfo", "struct_b_t_interface__t.html#a45dc14fe57dd5dd07c48638e1fe8050b", null ],
      [ "pxDutModeConfigure", "struct_b_t_interface__t.html#aa8dcb764c859f8c7742ff639b37ed5b1", null ],
      [ "pxDutModeSend", "struct_b_t_interface__t.html#aa53eba666b31620107062e48b69c004a", null ],
      [ "pxLeTestMode", "struct_b_t_interface__t.html#aa3b494c5c40d3232d669ee1247c7cfbf", null ],
      [ "pxConfigHCISnoopLog", "struct_b_t_interface__t.html#a2b5dc1a9d2af34da3547e6ba028b7621", null ],
      [ "pxConfigClear", "struct_b_t_interface__t.html#a82b2dce6d03cd70e75e7d575acac1d5f", null ],
      [ "pxReadRssi", "struct_b_t_interface__t.html#a28e43e671af09c1a4c54adccb9733a03", null ],
      [ "pxGetTxpower", "struct_b_t_interface__t.html#a081a41be8670030af44bf50faa27e7be", null ],
      [ "pxGetClassicAdapter", "struct_b_t_interface__t.html#a7ba6cbe0472eeeb9625d634c8226f7a7", null ],
      [ "pxGetLeAdapter", "struct_b_t_interface__t.html#ae03a38e6a439fe9e650f47d5df0f9132", null ],
      [ "pxGetLastError", "struct_b_t_interface__t.html#ad1660b1d16f2316f0a66df7edd5a12c5", null ],
      [ "pxGetStackFeaturesSupport", "struct_b_t_interface__t.html#a2a391d1160bf9a8604569918e76b91b4", null ]
    ] ],
    [ "BTGattFiltParamSetup_t", "struct_b_t_gatt_filt_param_setup__t.html", [
      [ "ucAdapterIf", "struct_b_t_gatt_filt_param_setup__t.html#ade75fed766c723ce6e5da434faca5616", null ],
      [ "ucAction", "struct_b_t_gatt_filt_param_setup__t.html#a74c5264312be76f9357c1f15922a210c", null ],
      [ "ucFiltIndex", "struct_b_t_gatt_filt_param_setup__t.html#a36b747215bb013379c8aec6239d12971", null ],
      [ "usFeatSeln", "struct_b_t_gatt_filt_param_setup__t.html#ab312fa398af8c9c4595334590efc3283", null ],
      [ "usListLogicType", "struct_b_t_gatt_filt_param_setup__t.html#a924c43331a0e14e535bf8a7ebcebb928", null ],
      [ "ucFiltLogicType", "struct_b_t_gatt_filt_param_setup__t.html#a02738ed0df9020d12e23d81be85fe642", null ],
      [ "ucRssiHighThres", "struct_b_t_gatt_filt_param_setup__t.html#afd40b855b2a1c4d364fe6c82056ae331", null ],
      [ "ucRssiLowThres", "struct_b_t_gatt_filt_param_setup__t.html#a6637cf9ee2451c3d8e02973257aef68e", null ],
      [ "ucDelayMode", "struct_b_t_gatt_filt_param_setup__t.html#a2a628ec34e9577185d07e9a7f0284dcd", null ],
      [ "usFoundTimeout", "struct_b_t_gatt_filt_param_setup__t.html#ac55466dc1668d9ae5c6fdadb584ed633", null ],
      [ "usLostTimeout", "struct_b_t_gatt_filt_param_setup__t.html#a419ad89e7dc1c9310ca410d530627740", null ],
      [ "ucFoundTimeout_cnt", "struct_b_t_gatt_filt_param_setup__t.html#a4fd0f54bea9b98978fd74b8eb04e423a", null ],
      [ "usNumOfTrackingEntries", "struct_b_t_gatt_filt_param_setup__t.html#a6e4085d8c41cfe8adea1e7cdbfc8dc08", null ]
    ] ],
    [ "BTGattAdvName_t", "struct_b_t_gatt_adv_name__t.html", [
      [ "xType", "struct_b_t_gatt_adv_name__t.html#adc79843d1eca34e8c3632d413d91f2ce", null ],
      [ "ucShortNameLen", "struct_b_t_gatt_adv_name__t.html#a79595241d8c89b1fcb2bd463c90f66e7", null ]
    ] ],
    [ "BTGattAdvertismentParams_t", "struct_b_t_gatt_advertisment_params__t.html", [
      [ "usAdvertisingEventProperties", "struct_b_t_gatt_advertisment_params__t.html#a72795d7149e4fca3a18335ea76462b29", null ],
      [ "bIncludeTxPower", "struct_b_t_gatt_advertisment_params__t.html#a9efcef6b49cd40a50787a0810f2d6693", null ],
      [ "ucName", "struct_b_t_gatt_advertisment_params__t.html#af19db7261c0dd96b60dc3c2ef1690a7d", null ],
      [ "bSetScanRsp", "struct_b_t_gatt_advertisment_params__t.html#a9598fa2b0f5a8072db857d938b6ae4e6", null ],
      [ "ulAppearance", "struct_b_t_gatt_advertisment_params__t.html#acc780c9f5f0dabb807711e007ee32e56", null ],
      [ "ulMinInterval", "struct_b_t_gatt_advertisment_params__t.html#a7d2702c29ab78d5a30b4496ad28e7585", null ],
      [ "ulMaxInterval", "struct_b_t_gatt_advertisment_params__t.html#aaa1e132471e56cdd9f11fc5ea1f88802", null ],
      [ "usMinAdvInterval", "struct_b_t_gatt_advertisment_params__t.html#a2e0cd8e37076b5c95c699f1925f3c0d0", null ],
      [ "usMaxAdvInterval", "struct_b_t_gatt_advertisment_params__t.html#a9006a6b1fbfc95955bccbf124647ea12", null ],
      [ "ucChannelMap", "struct_b_t_gatt_advertisment_params__t.html#acc9133aaf03e9100028db607328380f0", null ],
      [ "ucTxPower", "struct_b_t_gatt_advertisment_params__t.html#a4a172214b81ef58dfbb8c0bbfd821000", null ],
      [ "ucTimeout", "struct_b_t_gatt_advertisment_params__t.html#a79c89246bcae244c95ad3f3c6fd39a97", null ],
      [ "usTimeout", "struct_b_t_gatt_advertisment_params__t.html#add2f8b2ff2f32c63e4743fa2dd9b7f19", null ],
      [ "ucPrimaryAdvertisingPhy", "struct_b_t_gatt_advertisment_params__t.html#a1435cbdbc4cace7bd93aac8568f68b7b", null ],
      [ "ucSecondaryAdvertisingPhy", "struct_b_t_gatt_advertisment_params__t.html#a8a8ff55834afa8d9fedc03489124ad09", null ],
      [ "xAddrType", "struct_b_t_gatt_advertisment_params__t.html#a8b65c77781e307ddf675a1c226164837", null ]
    ] ],
    [ "BTLocalLeFeatures_t", "struct_b_t_local_le_features__t.html", [
      [ "usVersionSupported", "struct_b_t_local_le_features__t.html#ab02472c0b37c56c8325cce56229f7efa", null ],
      [ "ucLocalPrivacyEnabled", "struct_b_t_local_le_features__t.html#a773f86ddc871d30cd965b256a399d441", null ],
      [ "ucMaxAdvInstance", "struct_b_t_local_le_features__t.html#ac2a9016284cff5f9e654b088ba609ec2", null ],
      [ "ucRpaOffloadSupported", "struct_b_t_local_le_features__t.html#a77c33204967e8df3a93c341d3e44153c", null ],
      [ "ucMaxIrkListSize", "struct_b_t_local_le_features__t.html#a613fd45c35697ca820c44853585c00c7", null ],
      [ "ucMaxAdFilterSupported", "struct_b_t_local_le_features__t.html#a950703d6c228ac2c4d6d7693010a34d9", null ],
      [ "ucActivityEnergyInfoSupported", "struct_b_t_local_le_features__t.html#a5aae6f95b9902c3e7c7180e33c213ea6", null ],
      [ "usScanResultStorageSize", "struct_b_t_local_le_features__t.html#ab088f0895adf5e6b1ccc7844a9f4c5a0", null ],
      [ "usTotalTrackableAdvertisers", "struct_b_t_local_le_features__t.html#ae9a6d574d37c3711e2006911711ab0d6", null ],
      [ "bExtendedScanSupport", "struct_b_t_local_le_features__t.html#ae2ba98e14923b9b3a848f0d37c2a7234", null ],
      [ "bDebugLoggingSupported", "struct_b_t_local_le_features__t.html#aa347310bf9990d309b429bfde4bb967a", null ]
    ] ],
    [ "BTBleProperty_t", "struct_b_t_ble_property__t.html", [
      [ "xType", "struct_b_t_ble_property__t.html#a7affa5a06bb73794ba83bbe3e2a0f5e4", null ],
      [ "xLen", "struct_b_t_ble_property__t.html#a2c7241cd337fb38ba3a34a45bc17df1e", null ],
      [ "pvVal", "struct_b_t_ble_property__t.html#ac540b4fc11992479b29739884dae62b9", null ]
    ] ],
    [ "BTBleAdapterCallbacks_t", "struct_b_t_ble_adapter_callbacks__t.html", [
      [ "pxRegisterBleAdapterCb", "struct_b_t_ble_adapter_callbacks__t.html#a3d967dc64150260b0e295e95e9f29ad4", null ],
      [ "pxScanResultCb", "struct_b_t_ble_adapter_callbacks__t.html#a486c22bc2b70f78f5a16d3be6c4899b6", null ],
      [ "pxBleAdapterPropertiesCb", "struct_b_t_ble_adapter_callbacks__t.html#aade213513c304e50c89059124ed73db6", null ],
      [ "pxBleRemoteDevicePropertiesCb", "struct_b_t_ble_adapter_callbacks__t.html#a6b96cee197a38482ec54daab54238606", null ],
      [ "pxOpenCb", "struct_b_t_ble_adapter_callbacks__t.html#a6d0b4d1263082cc24777f6d439632d16", null ],
      [ "pxCloseCb", "struct_b_t_ble_adapter_callbacks__t.html#a32c3f7fc4d6585d4b263de975bbfa579", null ],
      [ "pxReadRemoteRssiCb", "struct_b_t_ble_adapter_callbacks__t.html#adec4d9b68cc7501acfe226207947476b", null ],
      [ "pxAdvStatusCb", "struct_b_t_ble_adapter_callbacks__t.html#a439e0c25a5ffb7070327c711ac8a780c", null ],
      [ "pxSetAdvDataCb", "struct_b_t_ble_adapter_callbacks__t.html#a12153179a2f8bada307d0c8e2f11c2cc", null ],
      [ "pxConnParameterUpdateCb", "struct_b_t_ble_adapter_callbacks__t.html#a5d91aca183aaef0aaad03ee088ad79ed", null ],
      [ "pxScanFilterCfgCb", "struct_b_t_ble_adapter_callbacks__t.html#a3d1fda96cbd7a74dd35f0ce997c909cb", null ],
      [ "pxScanFilterParamCb", "struct_b_t_ble_adapter_callbacks__t.html#a950f0209b82a43a132fa72674d14b31a", null ],
      [ "pxScanFilterStatusCb", "struct_b_t_ble_adapter_callbacks__t.html#a4b06efe50772897df37f52c417dd4fb5", null ],
      [ "pxMultiAdvEnableCb", "struct_b_t_ble_adapter_callbacks__t.html#a3815f3f14180da893e82b16f40816fe2", null ],
      [ "pxMultiAdvUpdateCb", "struct_b_t_ble_adapter_callbacks__t.html#ab11bb5dccb821160d56ada4b7476c9a2", null ],
      [ "pxMultiAdvDataCb", "struct_b_t_ble_adapter_callbacks__t.html#a5dd501fdfedb2607c059a3fc8a3d4b9c", null ],
      [ "pxMultiAdvDisableCb", "struct_b_t_ble_adapter_callbacks__t.html#a95dc6cec6c26209a431453e60f15dc07", null ],
      [ "pxCongestionCb", "struct_b_t_ble_adapter_callbacks__t.html#ae04d95f143f58e2adcc632ff6ccb4e43", null ],
      [ "pxBatchscanCfgStorageCb", "struct_b_t_ble_adapter_callbacks__t.html#a42bd9b2e47540d8a0b1ca6a793e41031", null ],
      [ "pxBatchscanEnbDisableCb", "struct_b_t_ble_adapter_callbacks__t.html#a99608930f71f72f361d59affef3a43bb", null ],
      [ "pxBatchscanReportsCb", "struct_b_t_ble_adapter_callbacks__t.html#ad4f09c33007cee29a12fcf398ba261f7", null ],
      [ "pxBatchscanThresholdCb", "struct_b_t_ble_adapter_callbacks__t.html#a8dbf9cb442d75d8e86102bd2df6280c5", null ],
      [ "pxTrackAdvEventCb", "struct_b_t_ble_adapter_callbacks__t.html#a861a480fd113e768800498e822dbfb2d", null ],
      [ "pxScanParameterSetupCompletedCb", "struct_b_t_ble_adapter_callbacks__t.html#a0d03213d99a9b18026dcc0cda95dc5db", null ],
      [ "pxPhyUpdatedCb", "struct_b_t_ble_adapter_callbacks__t.html#ad12fee54cfa7208d05bf6926e7167440", null ]
    ] ],
    [ "BTBleAdapter_t", "struct_b_t_ble_adapter__t.html", [
      [ "pxRegisterBleApp", "struct_b_t_ble_adapter__t.html#a0ed5b107efb3dc665b843701dd339c57", null ],
      [ "pxUnregisterBleApp", "struct_b_t_ble_adapter__t.html#a450d76004006bf73dccd5be32baa67e6", null ],
      [ "pxBleAdapterInit", "struct_b_t_ble_adapter__t.html#a48dfb3a0780dd3f7aef46113c6bafea7", null ],
      [ "pxGetBleAdapterProperty", "struct_b_t_ble_adapter__t.html#a7e21a6cd232dd56aea4969fbcc89561c", null ],
      [ "pxSetBleAdapterProperty", "struct_b_t_ble_adapter__t.html#a2d2502dc37b2f2879fcd4b224fbb6845", null ],
      [ "pxGetallBleRemoteDeviceProperties", "struct_b_t_ble_adapter__t.html#a1b27d36253a882e4692331e84e2c32bc", null ],
      [ "pxGetBleRemoteDeviceProperty", "struct_b_t_ble_adapter__t.html#abc925e6427f2bb3644b1e3cf4adfb5ca", null ],
      [ "pxSetBleRemoteDeviceProperty", "struct_b_t_ble_adapter__t.html#a717abda02c722d0ef1d02d8720d4a9c5", null ],
      [ "pxScan", "struct_b_t_ble_adapter__t.html#a609bbfc14671d0fc52758425a4f5e018", null ],
      [ "pxConnect", "struct_b_t_ble_adapter__t.html#a596157d578bc1bf01cdcedfd5da7006c", null ],
      [ "pxDisconnect", "struct_b_t_ble_adapter__t.html#ade588128e4cfa98d99e435f133f3e9fc", null ],
      [ "pxStartAdv", "struct_b_t_ble_adapter__t.html#ace571414cc8bed5bf94de98484f84c37", null ],
      [ "pxStopAdv", "struct_b_t_ble_adapter__t.html#af4793867b74b669abb1e5c6cd5c5a4b3", null ],
      [ "pxReadRemoteRssi", "struct_b_t_ble_adapter__t.html#aadab0ac4a83105e3724d7cc61cc247bf", null ],
      [ "pxScanFilterParamSetup", "struct_b_t_ble_adapter__t.html#ae5aa76ea6d99121758bbffdad6fa53e6", null ],
      [ "pxScanFilterAddRemove", "struct_b_t_ble_adapter__t.html#a28324d2e9b6869016bc0da06dadeb99a", null ],
      [ "pxScanFilterClear", "struct_b_t_ble_adapter__t.html#af94d4ca9b210c703c0973e30b6874077", null ],
      [ "pxScanFilterEnable", "struct_b_t_ble_adapter__t.html#a0395e32af9dbdeeaca2b93afd775b402", null ],
      [ "pxGetDeviceType", "struct_b_t_ble_adapter__t.html#ab8fe1381d455974f40b6aa6573b8e2dd", null ],
      [ "pxSetAdvData", "struct_b_t_ble_adapter__t.html#a8d603a909c26dcf804c3c4818fa7afa7", null ],
      [ "pxSetAdvRawData", "struct_b_t_ble_adapter__t.html#a8af2088b194e5f9bbe43eac6a2fc6324", null ],
      [ "pxConnParameterUpdateRequest", "struct_b_t_ble_adapter__t.html#ae6fb769742e1eddd8c48c62d4ae50d56", null ],
      [ "pxSetScanParameters", "struct_b_t_ble_adapter__t.html#ae4e692e6dbc4baf9e6831ba3fb5a6ad3", null ],
      [ "pxMultiAdvEnable", "struct_b_t_ble_adapter__t.html#a7013e7031e5568d386dd1243f01051ea", null ],
      [ "pxMultiAdvUpdate", "struct_b_t_ble_adapter__t.html#a64173de646e747bed3fe13d15d7d6a91", null ],
      [ "pxMultiAdvSetInstData", "struct_b_t_ble_adapter__t.html#a2df0da7cec530bd9c970314adf1fb3fe", null ],
      [ "pxMultiAdvDisable", "struct_b_t_ble_adapter__t.html#a16916bfca8661f282f42c2fe207f3b48", null ],
      [ "pxBatchscanCfgStorage", "struct_b_t_ble_adapter__t.html#abb3e977426570da9822197eddc2ecca1", null ],
      [ "pxBatchscanEndBatchScan", "struct_b_t_ble_adapter__t.html#a34ca0858559f94ca606161ab16058210", null ],
      [ "pxBatchscanDisBatchScan", "struct_b_t_ble_adapter__t.html#a993bfa18ef214cb2d9fc611912604765", null ],
      [ "pxBatchscanReadReports", "struct_b_t_ble_adapter__t.html#acc9b28d19c5b57c33a8416b798ba3185", null ],
      [ "pxSetPreferredPhy", "struct_b_t_ble_adapter__t.html#aa8b19faaa97a4c995961a198f4c12d8f", null ],
      [ "pxReadPhy", "struct_b_t_ble_adapter__t.html#a5ca110fb791bbe829c2cc3e62c900b9f", null ],
      [ "ppvGetGattClientInterface", "struct_b_t_ble_adapter__t.html#a21967f642a0b6da7dcb2eef4e1c5ded3", null ],
      [ "ppvGetGattServerInterface", "struct_b_t_ble_adapter__t.html#accd00241736a31cf961cc901b5d0f02e", null ],
      [ "pxMultiAdvSetInstRawData", "struct_b_t_ble_adapter__t.html#a34d58c76cfd50c86f937f18d2eab0201", null ],
      [ "pxSetBgScanParameters", "struct_b_t_ble_adapter__t.html#a417806758b45d2843c641530285d0c04", null ]
    ] ],
    [ "BTServiceRecord_t", "struct_b_t_service_record__t.html", [
      [ "xUuid", "struct_b_t_service_record__t.html#a2b38e7148dcc834b9458eb7cbfd97f2d", null ],
      [ "usChannel", "struct_b_t_service_record__t.html#a122567fca42f251e54ccd643aa403c88", null ],
      [ "cName", "struct_b_t_service_record__t.html#ab0adfd675e2c94b07cd6d46abcdd335c", null ]
    ] ],
    [ "BTEirManfInfo_t", "struct_b_t_eir_manf_info__t.html", [
      [ "ulVvendor", "struct_b_t_eir_manf_info__t.html#aa3e722e9be24e15e07ff1e2c4f17e1a2", null ],
      [ "ulProduct", "struct_b_t_eir_manf_info__t.html#a4b6bf119380c0043ef718ac28c39a512", null ]
    ] ],
    [ "BTGadgetEirManfInfo_t", "struct_b_t_gadget_eir_manf_info__t.html", [
      [ "ulVendor", "struct_b_t_gadget_eir_manf_info__t.html#a09f7113458caf558e961b19736d0facd", null ],
      [ "ulProduct", "struct_b_t_gadget_eir_manf_info__t.html#a87fe9405b7dc7c0d742f50f3f864886f", null ],
      [ "ulUuid", "struct_b_t_gadget_eir_manf_info__t.html#a3db6c5c870ff0e107fd365e282b52c16", null ]
    ] ],
    [ "BTClassicProperty_t", "struct_b_t_classic_property__t.html", [
      [ "xType", "struct_b_t_classic_property__t.html#abf645625c4b9b6d874fbc5e9ec5da18b", null ],
      [ "xLen", "struct_b_t_classic_property__t.html#a13794908ba588fda190a3cd0992e1d84", null ],
      [ "pvVal", "struct_b_t_classic_property__t.html#aeb387e0aa72f08cffb2c291a8ea588e9", null ]
    ] ],
    [ "BTClassicCallbacks_t", "struct_b_t_classic_callbacks__t.html", [
      [ "pxDevProperties_cb", "struct_b_t_classic_callbacks__t.html#a8f34baeb9b123da04181056157ae0a78", null ],
      [ "pxRemoteDevProperties_cb", "struct_b_t_classic_callbacks__t.html#aac911b3d2665b6e2ae09d898f101fd36", null ],
      [ "pxDeviceFound_cb", "struct_b_t_classic_callbacks__t.html#a0d17f4ea7787e99b971a54fa69e1d07f", null ],
      [ "pxDiscoveryStateChanged_cb", "struct_b_t_classic_callbacks__t.html#ad81e6fb096f2bb15047e08878437d50b", null ],
      [ "pxAclStateChanged_cb", "struct_b_t_classic_callbacks__t.html#ab75b3611e615f0e2b14393aa72d422be", null ]
    ] ],
    [ "BTClassicInterface_t", "struct_b_t_classic_interface__t.html", [
      [ "pxInit", "struct_b_t_classic_interface__t.html#abc09c8786f1cca585c7356f388585253", null ],
      [ "pxCleanup", "struct_b_t_classic_interface__t.html#ad7056305204c0f2e55780839cfdd3d11", null ],
      [ "pxGetClassicDeviceProperty", "struct_b_t_classic_interface__t.html#a844be53829fa25cb4d6412e945af84f0", null ],
      [ "pxSetClassicDeviceProperty", "struct_b_t_classic_interface__t.html#a26c156f82c2f11768d270627938e8d72", null ],
      [ "pxGetAllRemoteClassicDeviceProperties", "struct_b_t_classic_interface__t.html#a1ea54f5ad2dbc56ab34213d79a612940", null ],
      [ "pxGetRemoteClassicDeviceProperty", "struct_b_t_classic_interface__t.html#ad4b609aff6165afcb5b949be4a951216", null ],
      [ "pxSetRemoteClassicDeviceProperty", "struct_b_t_classic_interface__t.html#a1ea4fb0e286acf7e97929d735e7ff74b", null ],
      [ "pxGetRemoteServiceRecord", "struct_b_t_classic_interface__t.html#a9652ef60501fa7d01db172118db0c455", null ],
      [ "pxGetRemoteService", "struct_b_t_classic_interface__t.html#a9dc5fbebd8b7515f5ba1c3345631e8d0", null ],
      [ "pxStartDiscovery", "struct_b_t_classic_interface__t.html#a6956091953cd76e199afe1f312642fe5", null ],
      [ "pxStopDiscovery", "struct_b_t_classic_interface__t.html#ad684b0b76e8021eefd2d9e4d6c231973", null ],
      [ "ppvGetProfileInterface", "struct_b_t_classic_interface__t.html#ac1a77653c6233f854814ca2f112265e7", null ]
    ] ],
    [ "BTBdaddr_t", "struct_b_t_bdaddr__t.html", [
      [ "ucAddress", "struct_b_t_bdaddr__t.html#af6565cbb89d5532f75373f3998caa7f9", null ]
    ] ],
    [ "BTBdname_t", "struct_b_t_bdname__t.html", [
      [ "ucName", "struct_b_t_bdname__t.html#ac469e66c279b8c9805488d8ed82bcb49", null ]
    ] ],
    [ "BTUuid_t", "struct_b_t_uuid__t.html", [
      [ "ucType", "struct_b_t_uuid__t.html#a3a987f03bcb7075dc1110a518592bce5", null ],
      [ "uu16", "struct_b_t_uuid__t.html#a13ce962b3891daea10fbb28aea3aa807", null ],
      [ "uu32", "struct_b_t_uuid__t.html#a609e6f17891fc59a44150fe1745edcb2", null ],
      [ "uu128", "struct_b_t_uuid__t.html#a38989165938b99e4da5d817659fe7a4b", null ],
      [ "uu", "struct_b_t_uuid__t.html#a79fc1ea9a0575506f58948df72194e18", null ]
    ] ],
    [ "BTServiceUUID_t", "group__bt__hal__struct__types.html#ga8b891d4e44836fd951ad1f13c42a0b3b", null ]
];