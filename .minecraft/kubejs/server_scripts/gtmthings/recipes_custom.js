ServerEvents.recipes(event => { 
    //Removing old GTMThings recipes
    event.remove({ output: 'gtmthings:advanced_terminal'})
    event.remove({ output: 'gtmthings:advanced_wireless_fluid_transfer_cover'})
    event.remove({ output: 'gtmthings:advanced_wireless_item_transfer_cover'})
    event.remove({ output: 'gtmthings:ev_1024a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:ev_1024a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:ev_16384a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:ev_16384a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:ev_16a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:ev_16a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:ev_256a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:ev_256a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:ev_2a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:ev_2a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:ev_4096a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:ev_4096a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:ev_4a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:ev_4a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:ev_4a_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:ev_65536a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:ev_65536a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:ev_huge_dual_hatch'})
    event.remove({ output: 'gtmthings:ev_huge_item_export_bus'})
    event.remove({ output: 'gtmthings:ev_huge_item_import_bus'})
    event.remove({ output: 'gtmthings:ev_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:hv_16a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:hv_16a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:hv_2a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:hv_2a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:hv_4a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:hv_4a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:hv_4a_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:hv_digital_miner'})
    event.remove({ output: 'gtmthings:hv_huge_dual_hatch'})
    event.remove({ output: 'gtmthings:hv_huge_item_export_bus'})
    event.remove({ output: 'gtmthings:hv_huge_item_import_bus'})
    event.remove({ output: 'gtmthings:hv_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:iv_1024a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:iv_1024a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:iv_16384a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:iv_16384a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:iv_16a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:iv_16a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:iv_256a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:iv_256a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:iv_2a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:iv_2a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:iv_4096a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:iv_4096a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:iv_4a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:iv_4a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:iv_4a_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:iv_65536a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:iv_65536a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:iv_huge_dual_hatch'})
    event.remove({ output: 'gtmthings:iv_huge_item_export_bus'})
    event.remove({ output: 'gtmthings:iv_huge_item_import_bus'})
    event.remove({ output: 'gtmthings:iv_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:luv_1024a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:luv_1024a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:luv_16384a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:luv_16384a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:luv_16a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:luv_16a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:luv_256a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:luv_256a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:luv_2a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:luv_2a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:luv_4096a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:luv_4096a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:luv_4a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:luv_4a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:luv_4a_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:luv_65536a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:luv_65536a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:luv_huge_dual_hatch'})
    event.remove({ output: 'gtmthings:luv_huge_item_export_bus'})
    event.remove({ output: 'gtmthings:luv_huge_item_import_bus'})
    event.remove({ output: 'gtmthings:luv_programmablec_hatch'})
    event.remove({ output: 'gtmthings:luv_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:lv_16a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:lv_16a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:lv_2a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:lv_2a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:lv_4a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:lv_4a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:lv_4a_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:lv_digital_miner'})
    event.remove({ output: 'gtmthings:lv_huge_dual_hatch'})
    event.remove({ output: 'gtmthings:lv_huge_item_export_bus'})
    event.remove({ output: 'gtmthings:lv_huge_item_import_bus'})
    event.remove({ output: 'gtmthings:lv_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:max_1024a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:max_1024a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:max_16384a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:max_16384a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:max_16a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:max_16a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:max_256a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:max_256a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:max_2a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:max_2a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:max_4096a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:max_4096a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:max_4a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:max_4a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:max_65536a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:max_65536a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:max_huge_dual_hatch'})
    event.remove({ output: 'gtmthings:max_huge_item_export_bus'})
    event.remove({ output: 'gtmthings:max_huge_item_import_bus'})
    event.remove({ output: 'gtmthings:max_programmablec_hatch'})
    event.remove({ output: 'gtmthings:me_export_buffer'})
    event.remove({ output: 'gtmthings:mv_16a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:mv_16a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:mv_2a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:mv_2a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:mv_4a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:mv_4a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:mv_4a_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:mv_digital_miner'})
    event.remove({ output: 'gtmthings:mv_huge_dual_hatch'})
    event.remove({ output: 'gtmthings:mv_huge_item_export_bus'})
    event.remove({ output: 'gtmthings:mv_huge_item_import_bus'})
    event.remove({ output: 'gtmthings:mv_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:opv_1024a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:opv_1024a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:opv_16384a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:opv_16384a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:opv_16a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:opv_16a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:opv_256a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:opv_256a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:opv_2a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:opv_2a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:opv_4096a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:opv_4096a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:opv_4a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:opv_4a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:opv_4a_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:opv_65536a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:opv_65536a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:opv_huge_dual_hatch'})
    event.remove({ output: 'gtmthings:opv_huge_item_export_bus'})
    event.remove({ output: 'gtmthings:opv_huge_item_import_bus'})
    event.remove({ output: 'gtmthings:opv_programmablec_hatch'})
    event.remove({ output: 'gtmthings:opv_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:uev_1024a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uev_1024a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uev_16384a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uev_16384a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uev_16a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:uev_16a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:uev_256a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uev_256a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uev_2a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:uev_2a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:uev_4096a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uev_4096a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uev_4a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:uev_4a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:uev_4a_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:uev_65536a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uev_65536a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uev_huge_dual_hatch'})
    event.remove({ output: 'gtmthings:uev_huge_item_export_bus'})
    event.remove({ output: 'gtmthings:uev_huge_item_import_bus'})
    event.remove({ output: 'gtmthings:uev_programmablec_hatch'})
    event.remove({ output: 'gtmthings:uev_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:uhv_1024a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uhv_1024a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uhv_16384a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uhv_16384a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uhv_16a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:uhv_16a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:uhv_256a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uhv_256a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uhv_2a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:uhv_2a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:uhv_4096a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uhv_4096a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uhv_4a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:uhv_4a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:uhv_4a_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:uhv_65536a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uhv_65536a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uhv_huge_dual_hatch'})
    event.remove({ output: 'gtmthings:uhv_huge_item_export_bus'})
    event.remove({ output: 'gtmthings:uhv_huge_item_import_bus'})
    event.remove({ output: 'gtmthings:uhv_programmablec_hatch'})
    event.remove({ output: 'gtmthings:uhv_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:uiv_1024a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uiv_1024a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uiv_16384a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uiv_16384a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uiv_16a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:uiv_16a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:uiv_256a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uiv_256a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uiv_2a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:uiv_2a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:uiv_4096a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uiv_4096a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uiv_4a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:uiv_4a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:uiv_4a_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:uiv_65536a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uiv_65536a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uiv_huge_dual_hatch'})
    event.remove({ output: 'gtmthings:uiv_huge_item_export_bus'})
    event.remove({ output: 'gtmthings:uiv_huge_item_import_bus'})
    event.remove({ output: 'gtmthings:uiv_programmablec_hatch'})
    event.remove({ output: 'gtmthings:uiv_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:ulv_huge_dual_hatch'})
    event.remove({ output: 'gtmthings:ulv_huge_item_export_bus'})
    event.remove({ output: 'gtmthings:ulv_huge_item_import_bus'})
    event.remove({ output: 'gtmthings:uv_1024a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uv_1024a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uv_16384a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uv_16384a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uv_16a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:uv_16a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:uv_256a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uv_256a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uv_2a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:uv_2a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:uv_4096a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uv_4096a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uv_4a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:uv_4a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:uv_4a_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:uv_65536a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uv_65536a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uv_huge_dual_hatch'})
    event.remove({ output: 'gtmthings:uv_huge_item_export_bus'})
    event.remove({ output: 'gtmthings:uv_huge_item_import_bus'})
    event.remove({ output: 'gtmthings:uv_programmablec_hatch'})
    event.remove({ output: 'gtmthings:uv_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:uxv_1024a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uxv_1024a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uxv_16384a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uxv_16384a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uxv_16a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:uxv_16a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:uxv_256a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uxv_256a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uxv_2a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:uxv_2a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:uxv_4096a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uxv_4096a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uxv_4a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:uxv_4a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:uxv_4a_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:uxv_65536a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:uxv_65536a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:uxv_huge_dual_hatch'})
    event.remove({ output: 'gtmthings:uxv_huge_item_export_bus'})
    event.remove({ output: 'gtmthings:uxv_huge_item_import_bus'})
    event.remove({ output: 'gtmthings:uxv_programmablec_hatch'})
    event.remove({ output: 'gtmthings:uxv_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:virtual_item_provider_cell'})
    event.remove({ output: 'gtmthings:virtual_item_provider'})
    event.remove({ output: 'gtmthings:wireless_computation_receiver_hatch'})
    event.remove({ output: 'gtmthings:wireless_computation_transmitter_hatch'})
    event.remove({ output: 'gtmthings:wireless_energy_binding_tool'})
    event.remove({ output: 'gtmthings:wireless_energy_interface'})
    event.remove({ output: 'gtmthings:wireless_fluid_transfer_cover'})
    event.remove({ output: 'gtmthings:wireless_item_transfer_cover'})
    event.remove({ output: 'gtmthings:zpm_1024a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:zpm_1024a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:zpm_16384a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:zpm_16384a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:zpm_16a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:zpm_16a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:zpm_256a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:zpm_256a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:zpm_2a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:zpm_2a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:zpm_4096a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:zpm_4096a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:zpm_4a_wireless_energy_input_hatch'})
    event.remove({ output: 'gtmthings:zpm_4a_wireless_energy_output_hatch'})
    event.remove({ output: 'gtmthings:zpm_4a_wireless_energy_receive_cover'})
    event.remove({ output: 'gtmthings:zpm_65536a_wireless_laser_source_hatch'})
    event.remove({ output: 'gtmthings:zpm_65536a_wireless_laser_target_hatch'})
    event.remove({ output: 'gtmthings:zpm_huge_dual_hatch'})
    event.remove({ output: 'gtmthings:zpm_huge_item_export_bus'})
    event.remove({ output: 'gtmthings:zpm_huge_item_import_bus'})
    event.remove({ output: 'gtmthings:zpm_programmablec_hatch'})
    event.remove({ output: 'gtmthings:zpm_wireless_energy_receive_cover'})

    //Adding new GTMThings recipes
    event.shapeless(
        Item.of('gtmthings:lv_wireless_energy_receive_cover', 1),
        [
          'gtceu:lv_energy_input_hatch',
          'gtceu:machine_controller_cover',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:mv_wireless_energy_receive_cover', 1),
        [
          'gtceu:mv_energy_input_hatch',
          'gtceu:machine_controller_cover',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:hv_wireless_energy_receive_cover', 1),
        [
          'gtceu:hv_energy_input_hatch',
          'gtceu:machine_controller_cover',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:ev_wireless_energy_receive_cover', 1),
        [
          'gtceu:ev_energy_input_hatch',
          'gtceu:machine_controller_cover',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:iv_wireless_energy_receive_cover', 1),
        [
          'gtceu:iv_energy_input_hatch',
          'gtceu:machine_controller_cover',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:luv_wireless_energy_receive_cover', 1),
        [
          'gtceu:luv_energy_input_hatch',
          'gtceu:machine_controller_cover',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:zpm_wireless_energy_receive_cover', 1),
        [
          'gtceu:zpm_energy_input_hatch',
          'gtceu:machine_controller_cover',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uv_wireless_energy_receive_cover', 1),
        [
          'gtceu:uv_energy_input_hatch',
          'gtceu:machine_controller_cover',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uhv_wireless_energy_receive_cover', 1),
        [
          'gtceu:uhv_energy_input_hatch',
          'gtceu:machine_controller_cover',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uev_wireless_energy_receive_cover', 1),
        [
          'gtceu:uev_energy_input_hatch',
          'gtceu:machine_controller_cover',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uiv_wireless_energy_receive_cover', 1),
        [
          'gtceu:uiv_energy_input_hatch',
          'gtceu:machine_controller_cover',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uxv_wireless_energy_receive_cover', 1),
        [
          'gtceu:uxv_energy_input_hatch',
          'gtceu:machine_controller_cover',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:lv_2a_wireless_energy_input_hatch', 1),
        [
          'gtceu:lv_energy_input_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:lv_2a_wireless_energy_output_hatch', 1),
        [
          'gtceu:lv_energy_output_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:mv_2a_wireless_energy_input_hatch', 1),
        [
          'gtceu:mv_energy_input_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:mv_2a_wireless_energy_output_hatch', 1),
        [
          'gtceu:mv_energy_output_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:hv_2a_wireless_energy_input_hatch', 1),
        [
          'gtceu:hv_energy_input_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:hv_2a_wireless_energy_output_hatch', 1),
        [
          'gtceu:hv_energy_output_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:ev_2a_wireless_energy_input_hatch', 1),
        [
          'gtceu:ev_energy_input_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:ev_2a_wireless_energy_output_hatch', 1),
        [
          'gtceu:ev_energy_output_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:ev_4a_wireless_energy_input_hatch', 1),
        [
          'gtceu:ev_energy_input_hatch_4a',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:ev_4a_wireless_energy_output_hatch', 1),
        [
          'gtceu:ev_energy_output_hatch_4a',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:ev_16a_wireless_energy_input_hatch', 1),
        [
          'gtceu:ev_energy_input_hatch_16a',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:ev_16a_wireless_energy_output_hatch', 1),
        [
          'gtceu:ev_energy_output_hatch_16a',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:iv_2a_wireless_energy_input_hatch', 1),
        [
          'gtceu:iv_energy_input_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:iv_2a_wireless_energy_output_hatch', 1),
        [
          'gtceu:iv_energy_output_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:iv_4a_wireless_energy_input_hatch', 1),
        [
          'gtceu:iv_energy_input_hatch_4a',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:iv_4a_wireless_energy_output_hatch', 1),
        [
          'gtceu:iv_energy_output_hatch_4a',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:iv_16a_wireless_energy_input_hatch', 1),
        [
          'gtceu:iv_energy_input_hatch_16a',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:iv_16a_wireless_energy_output_hatch', 1),
        [
          'gtceu:iv_energy_output_hatch_16a',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:iv_256a_wireless_laser_target_hatch', 1),
        [
          'gtceu:iv_256a_laser_target_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:iv_256a_wireless_laser_source_hatch', 1),
        [
          'gtceu:iv_256a_laser_source_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:iv_1024a_wireless_laser_target_hatch', 1),
        [
          'gtceu:iv_1024a_laser_target_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:iv_1024a_wireless_laser_source_hatch', 1),
        [
          'gtceu:iv_1024a_laser_source_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:iv_4096a_wireless_laser_target_hatch', 1),
        [
          'gtceu:iv_4096a_laser_target_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:iv_4096a_wireless_laser_source_hatch', 1),
        [
          'gtceu:iv_4096a_laser_source_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:luv_2a_wireless_energy_input_hatch', 1),
        [
          'gtceu:luv_energy_input_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:luv_2a_wireless_energy_output_hatch', 1),
        [
          'gtceu:luv_energy_output_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:luv_4a_wireless_energy_input_hatch', 1),
        [
          'gtceu:luv_energy_input_hatch_4a',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:luv_4a_wireless_energy_output_hatch', 1),
        [
          'gtceu:luv_energy_output_hatch_4a',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:luv_16a_wireless_energy_input_hatch', 1),
        [
          'gtceu:luv_energy_input_hatch_16a',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:luv_16a_wireless_energy_output_hatch', 1),
        [
          'gtceu:luv_energy_output_hatch_16a',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:luv_256a_wireless_laser_target_hatch', 1),
        [
          'gtceu:luv_256a_laser_target_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:luv_256a_wireless_laser_source_hatch', 1),
        [
          'gtceu:luv_256a_laser_source_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:luv_1024a_wireless_laser_target_hatch', 1),
        [
          'gtceu:luv_1024a_laser_target_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:luv_1024a_wireless_laser_source_hatch', 1),
        [
          'gtceu:luv_1024a_laser_source_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:luv_4096a_wireless_laser_target_hatch', 1),
        [
          'gtceu:luv_4096a_laser_target_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:luv_4096a_wireless_laser_source_hatch', 1),
        [
          'gtceu:luv_4096a_laser_source_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:zpm_2a_wireless_energy_input_hatch', 1),
        [
          'gtceu:zpm_energy_input_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:zpm_2a_wireless_energy_output_hatch', 1),
        [
          'gtceu:zpm_energy_output_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:zpm_4a_wireless_energy_input_hatch', 1),
        [
          'gtceu:zpm_energy_input_hatch_4a',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:zpm_4a_wireless_energy_output_hatch', 1),
        [
          'gtceu:zpm_energy_output_hatch_4a',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:zpm_16a_wireless_energy_input_hatch', 1),
        [
          'gtceu:zpm_energy_input_hatch_16a',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:zpm_16a_wireless_energy_output_hatch', 1),
        [
          'gtceu:zpm_energy_output_hatch_16a',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:zpm_256a_wireless_laser_target_hatch', 1),
        [
          'gtceu:zpm_256a_laser_target_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:zpm_256a_wireless_laser_source_hatch', 1),
        [
          'gtceu:zpm_256a_laser_source_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:zpm_1024a_wireless_laser_target_hatch', 1),
        [
          'gtceu:zpm_1024a_laser_target_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:zpm_1024a_wireless_laser_source_hatch', 1),
        [
          'gtceu:zpm_1024a_laser_source_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:zpm_4096a_wireless_laser_target_hatch', 1),
        [
          'gtceu:zpm_4096a_laser_target_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:zpm_4096a_wireless_laser_source_hatch', 1),
        [
          'gtceu:zpm_4096a_laser_source_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uv_2a_wireless_energy_input_hatch', 1),
        [
          'gtceu:uv_energy_input_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uv_2a_wireless_energy_output_hatch', 1),
        [
          'gtceu:uv_energy_output_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uv_4a_wireless_energy_input_hatch', 1),
        [
          'gtceu:uv_energy_input_hatch_4a',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uv_4a_wireless_energy_output_hatch', 1),
        [
          'gtceu:uv_energy_output_hatch_4a',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uv_16a_wireless_energy_input_hatch', 1),
        [
          'gtceu:uv_energy_input_hatch_16a',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uv_16a_wireless_energy_output_hatch', 1),
        [
          'gtceu:uv_energy_output_hatch_16a',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uv_256a_wireless_laser_target_hatch', 1),
        [
          'gtceu:uv_256a_laser_target_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uv_256a_wireless_laser_source_hatch', 1),
        [
          'gtceu:uv_256a_laser_source_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uv_1024a_wireless_laser_target_hatch', 1),
        [
          'gtceu:uv_1024a_laser_target_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uv_1024a_wireless_laser_source_hatch', 1),
        [
          'gtceu:uv_1024a_laser_source_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uv_4096a_wireless_laser_target_hatch', 1),
        [
          'gtceu:uv_4096a_laser_target_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uv_4096a_wireless_laser_source_hatch', 1),
        [
          'gtceu:uv_4096a_laser_source_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uhv_2a_wireless_energy_input_hatch', 1),
        [
          'gtceu:uhv_energy_input_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uhv_2a_wireless_energy_output_hatch', 1),
        [
          'gtceu:uhv_energy_output_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uhv_4a_wireless_energy_input_hatch', 1),
        [
          'gtceu:uhv_energy_input_hatch_4a',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uhv_4a_wireless_energy_output_hatch', 1),
        [
          'gtceu:uhv_energy_output_hatch_4a',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uhv_16a_wireless_energy_input_hatch', 1),
        [
          'gtceu:uhv_energy_input_hatch_16a',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uhv_16a_wireless_energy_output_hatch', 1),
        [
          'gtceu:uhv_energy_output_hatch_16a',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uhv_256a_wireless_laser_target_hatch', 1),
        [
          'gtceu:uhv_256a_laser_target_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uhv_256a_wireless_laser_source_hatch', 1),
        [
          'gtceu:uhv_256a_laser_source_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uhv_1024a_wireless_laser_target_hatch', 1),
        [
          'gtceu:uhv_1024a_laser_target_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uhv_1024a_wireless_laser_source_hatch', 1),
        [
          'gtceu:uhv_1024a_laser_source_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uhv_4096a_wireless_laser_target_hatch', 1),
        [
          'gtceu:uhv_4096a_laser_target_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uhv_4096a_wireless_laser_source_hatch', 1),
        [
          'gtceu:uhv_4096a_laser_source_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uev_2a_wireless_energy_input_hatch', 1),
        [
          'gtceu:uev_energy_input_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uev_2a_wireless_energy_output_hatch', 1),
        [
          'gtceu:uev_energy_output_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uev_4a_wireless_energy_input_hatch', 1),
        [
          'gtceu:uev_energy_input_hatch_4a',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uev_4a_wireless_energy_output_hatch', 1),
        [
          'gtceu:uev_energy_output_hatch_4a',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uev_16a_wireless_energy_input_hatch', 1),
        [
          'gtceu:uev_energy_input_hatch_16a',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uev_16a_wireless_energy_output_hatch', 1),
        [
          'gtceu:uev_energy_output_hatch_16a',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uev_256a_wireless_laser_target_hatch', 1),
        [
          'gtceu:uev_256a_laser_target_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uev_256a_wireless_laser_source_hatch', 1),
        [
          'gtceu:uev_256a_laser_source_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uev_1024a_wireless_laser_target_hatch', 1),
        [
          'gtceu:uev_1024a_laser_target_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uev_1024a_wireless_laser_source_hatch', 1),
        [
          'gtceu:uev_1024a_laser_source_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uev_4096a_wireless_laser_target_hatch', 1),
        [
          'gtceu:uev_4096a_laser_target_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uev_4096a_wireless_laser_source_hatch', 1),
        [
          'gtceu:uev_4096a_laser_source_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uiv_2a_wireless_energy_input_hatch', 1),
        [
          'gtceu:uiv_energy_input_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uiv_2a_wireless_energy_output_hatch', 1),
        [
          'gtceu:uiv_energy_output_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uiv_4a_wireless_energy_input_hatch', 1),
        [
          'gtceu:uiv_energy_input_hatch_4a',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uiv_4a_wireless_energy_output_hatch', 1),
        [
          'gtceu:uiv_energy_output_hatch_4a',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uiv_16a_wireless_energy_input_hatch', 1),
        [
          'gtceu:uiv_energy_input_hatch_16a',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uiv_16a_wireless_energy_output_hatch', 1),
        [
          'gtceu:uiv_energy_output_hatch_16a',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uiv_256a_wireless_laser_target_hatch', 1),
        [
          'gtceu:uiv_256a_laser_target_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uiv_256a_wireless_laser_source_hatch', 1),
        [
          'gtceu:uiv_256a_laser_source_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uiv_1024a_wireless_laser_target_hatch', 1),
        [
          'gtceu:uiv_1024a_laser_target_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uiv_1024a_wireless_laser_source_hatch', 1),
        [
          'gtceu:uiv_1024a_laser_source_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uiv_4096a_wireless_laser_target_hatch', 1),
        [
          'gtceu:uiv_4096a_laser_target_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uiv_4096a_wireless_laser_source_hatch', 1),
        [
          'gtceu:uiv_4096a_laser_source_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uxv_2a_wireless_energy_input_hatch', 1),
        [
          'gtceu:uxv_energy_input_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uxv_2a_wireless_energy_output_hatch', 1),
        [
          'gtceu:uxv_energy_output_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uxv_4a_wireless_energy_input_hatch', 1),
        [
          'gtceu:uxv_energy_input_hatch_4a',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uxv_4a_wireless_energy_output_hatch', 1),
        [
          'gtceu:uxv_energy_output_hatch_4a',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uxv_16a_wireless_energy_input_hatch', 1),
        [
          'gtceu:uxv_energy_input_hatch_16a',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uxv_16a_wireless_energy_output_hatch', 1),
        [
          'gtceu:uxv_energy_output_hatch_16a',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uxv_256a_wireless_laser_target_hatch', 1),
        [
          'gtceu:uxv_256a_laser_target_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uxv_256a_wireless_laser_source_hatch', 1),
        [
          'gtceu:uxv_256a_laser_source_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uxv_1024a_wireless_laser_target_hatch', 1),
        [
          'gtceu:uxv_1024a_laser_target_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uxv_1024a_wireless_laser_source_hatch', 1),
        [
          'gtceu:uxv_1024a_laser_source_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uxv_4096a_wireless_laser_target_hatch', 1),
        [
          'gtceu:uxv_4096a_laser_target_hatch',
          'fluxnetworks:flux_point'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:uxv_4096a_wireless_laser_source_hatch', 1),
        [
          'gtceu:uxv_4096a_laser_source_hatch',
          'fluxnetworks:flux_plug'
        ]
      )
    event.shapeless(
        Item.of('gtmthings:wireless_energy_binding_tool', 1),
        [
          'gtceu:data_stick',
          'gtceu:machine_controller_cover'
        ]
      )
  })
