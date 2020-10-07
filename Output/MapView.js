{
    "data": {
        "id": "views::juicer::collectmap",
        "type": "juicer_collect_map_view",
        "attributes": {
            "user": {
                "id": "<USER ID>",
                "type": "users",
                "attributes": {
                    "token": "<USER ID>",
                    "phone_number": "<PHONE NUMBER>",
                    "email_address": "<EMAIL>",
                    "has_verified_email_address": true,
                    "name": "<NAME>",
                    "given_name": "<FIRST NAME>",
                    "surname": "<LAST-NAME>",
                    "default_payment_method": null,
                    "referral_code": "<REFERRAL CODE>",
                    "num_trips": 1,
                    "edu": false,
                    "subscription_item_states": [],
                    "promotion_notification": true,
                    "donation_profile": {
                        "id": "<ID>",
                        "type": "donation_profiles",
                        "attributes": {
                            "donation_type": "none",
                            "donation_organizations": [],
                            "total_donation_amount": {
                                "currency_code": "USD",
                                "amount": 0.0,
                                "amount_str": "0.0",
                                "currency_symbol": "$",
                                "display_string": "$0"
                            },
                            "total_donation_amount_cents": null,
                            "currency": null
                        }
                    },
                    "pod_vehicle_banner_status": null,
                    "juicer_profile_status": "active",
                    "juicer_profile_initial_activated_at": "<ACTIVATION DATE>",
                    "accepted_user_agreement_version": 2,
                    "accepted_compliance_version": 0,
                    "balance": {
                        "currency_code": "<CURRENCY>",
                        "amount": <AMOUNT>,
                        "amount_str": "<AMOUNT>",
                        "currency_symbol": "<SYMBOL>",
                        "display_string": "<FRONTEND>"
                    },
                    "pending_balance": {
                        "currency_code": "ILS",
                        "amount": 0.0,
                        "amount_str": "0.0",
                        "currency_symbol": "<SYMBOL>",
                        "display_string": "<FRONTEND>"
                    },
                    "new_juicer_earnings_amount": {
                        "currency_code": "USD",
                        "amount": 150.0,
                        "amount_str": "150.0",
                        "currency_symbol": "$",
                        "display_string": "$150"
                    },
                    "new_juicer_earnings_promo_amount": "150",
                    "new_juicer_earnings_promo_amount_cents": 15000,
                    "new_juicer_earnings_promo_amount_cent": 15000,
                    "new_juicer_earnings_promo_currency": "USD",
                    "juicer_referral_type": null,
                    "juicer_referral_code": "<JUICER REFERRAL CODE>",
                    "juicer_referral_amount": null,
                    "juicer_referral_amount_cents": null,
                    "juicer_referral_currency": null,
                    "balance_cents": <DK>,
                    "pending_balance_cents": 0,
                    "currency": "ILS",
                    "show_group_ride": false,
                    "id_verification_pending": false,
                    "juicer_first_name": "<FIRST NAME>",
                    "juicer_last_name": "<LAST NAME>",
                    "juicer_phone_number": "<PHONE NUMBER>",
                    "juicer_country_code": "<COUNTRY CODE>",
                    "juicer_currency": "<CURRENCY>",
                    "juicer_payment_profile": {
                        "id": "<ID>",
                        "type": "juicer_payment_profiles",
                        "attributes": {
                            "account_type": "portal",
                            "last4": null
                        }
                    },
                    "juicer_profile_has_limes": false,
                    "juicer_stripe_account_type": "express",
                    "juicer_stripe_login_url": null,
                    "juicer_reserved_hotspot": null,
                    "juicer_legal_entity": {},
                    "enable_juicer_retrieval_workflow": true,
                    "juicer_full_payout_serve_time": 420,
                    "juicer_full_payout_battery_percentage": 95.0,
                    "juicer_full_payout_dropoff_time": 240,
                    "juicer_harvest_cap": 100,
                    "juicer_level": 1,
                    "juicer_level_progress": {
                        "num_active_days": 0,
                        "num_tasks": 0,
                        "proportion_perfect_serves": 0
                    },
                    "juicer_fleet_relationship": null,
                    "vat_enabled_region": false
                }
            },
            "reserved_vehicles": [],
            "vehicles": [
                {
                    "id": "GSIHP6X5FRIT5",
                    "type": "juicer_bikes",
                    "attributes": {
                        "status": "locked",
                        "plate_number": "850147",
                        "latitude": -43.52376,
                        "longitude": 172.637499,
                        "last_activity_at": "2020-10-07T05:52:31.000Z",
                        "last_trip_at": "2020-10-07T01:52:20.000Z",
                        "type_name": "scooter",
                        "battery_level": "super_low",
                        "battery_percentage": 11,
                        "meter_range": null,
                        "icon_usage_type": null,
                        "last_three": "147",
                        "already_collected": false,
                        "task_type": "ScooterChargeTask",
                        "juicer_earnings_amount": null,
                        "display_task": {
                            "id": "LUJBQ3WH24AJ5",
                            "type": "juicer_tasks",
                            "attributes": {
                                "bike": null,
                                "task_type": "ScooterChargeTask",
                                "due_at": null,
                                "juicer_earnings_amount": {
                                    "currency_code": "NZD",
                                    "amount": 4.25,
                                    "amount_str": "4.25",
                                    "currency_symbol": "$",
                                    "display_string": "$4.25"
                                },
                                "reservation": null,
                                "reservation_time_seconds": 3600,
                                "info_window": {
                                    "title": "Charge XXX-147",
                                    "description": "Charge and drop off at a LimeHub by 07:00 AM"
                                },
                                "expected_due_time": "2020-10-07T18:00:00.000Z",
                                "status": "open",
                                "juicer_earnings_currency": "NZD",
                                "juicer_earnings_amount_cents": 425
                            }
                        },
                        "has_physical_lock": false,
                        "juicer_earnings_currency": null,
                        "juicer_earnings_amount_cents": null
                    }
                },
                {
                    "id": "X5ZAPAJYYYTCP",
                    "type": "juicer_bikes",
                    "attributes": {
                        "status": "locked",
                        "plate_number": "830789",
                        "latitude": -43.521931,
                        "longitude": 172.633686,
                        "last_activity_at": "2020-10-07T06:27:34.000Z",
                        "last_trip_at": "2020-10-07T04:42:22.000Z",
                        "type_name": "scooter",
                        "battery_level": "super_low",
                        "battery_percentage": 17,
                        "meter_range": null,
                        "icon_usage_type": null,
                        "last_three": "789",
                        "already_collected": false,
                        "task_type": "ScooterChargeTask",
                        "juicer_earnings_amount": null,
                        "display_task": {
                            "id": "WJN4DSSEWS3ST",
                            "type": "juicer_tasks",
                            "attributes": {
                                "bike": null,
                                "task_type": "ScooterChargeTask",
                                "due_at": null,
                                "juicer_earnings_amount": {
                                    "currency_code": "NZD",
                                    "amount": 4.25,
                                    "amount_str": "4.25",
                                    "currency_symbol": "$",
                                    "display_string": "$4.25"
                                },
                                "reservation": null,
                                "reservation_time_seconds": 3600,
                                "info_window": {
                                    "title": "Charge XXX-789",
                                    "description": "Charge and drop off at a LimeHub by 07:00 AM"
                                },
                                "expected_due_time": "2020-10-07T18:00:00.000Z",
                                "status": "open",
                                "juicer_earnings_currency": "NZD",
                                "juicer_earnings_amount_cents": 425
                            }
                        },
                        "has_physical_lock": false,
                        "juicer_earnings_currency": null,
                        "juicer_earnings_amount_cents": null
                    }
                },
                {
                    "id": "UCJXNLHL47LGY",
                    "type": "juicer_bikes",
                    "attributes": {
                        "status": "locked",
                        "plate_number": "419226",
                        "latitude": -43.519441,
                        "longitude": 172.632558,
                        "last_activity_at": "2020-10-07T06:21:22.000Z",
                        "last_trip_at": "2020-10-07T04:15:09.000Z",
                        "type_name": "scooter",
                        "battery_level": "super_low",
                        "battery_percentage": 19,
                        "meter_range": null,
                        "icon_usage_type": null,
                        "last_three": "226",
                        "already_collected": false,
                        "task_type": "ScooterChargeTask",
                        "juicer_earnings_amount": null,
                        "display_task": {
                            "id": "QG5HRIOYNYRZT",
                            "type": "juicer_tasks",
                            "attributes": {
                                "bike": null,
                                "task_type": "ScooterChargeTask",
                                "due_at": null,
                                "juicer_earnings_amount": {
                                    "currency_code": "NZD",
                                    "amount": 4.25,
                                    "amount_str": "4.25",
                                    "currency_symbol": "$",
                                    "display_string": "$4.25"
                                },
                                "reservation": null,
                                "reservation_time_seconds": 3600,
                                "info_window": {
                                    "title": "Charge XXX-226",
                                    "description": "Charge and drop off at a LimeHub by 07:00 AM"
                                },
                                "expected_due_time": "2020-10-07T18:00:00.000Z",
                                "status": "open",
                                "juicer_earnings_currency": "NZD",
                                "juicer_earnings_amount_cents": 425
                            }
                        },
                        "has_physical_lock": false,
                        "juicer_earnings_currency": null,
                        "juicer_earnings_amount_cents": null
                    }
                },
                {
                    "id": "2CJQF35OTE2TA",
                    "type": "juicer_bikes",
                    "attributes": {
                        "status": "locked",
                        "plate_number": "765338",
                        "latitude": -43.519151,
                        "longitude": 172.635853,
                        "last_activity_at": "2020-10-07T06:19:29.000Z",
                        "last_trip_at": "2020-10-07T04:28:18.000Z",
                        "type_name": "scooter",
                        "battery_level": "low",
                        "battery_percentage": 22,
                        "meter_range": null,
                        "icon_usage_type": null,
                        "last_three": "338",
                        "already_collected": false,
                        "task_type": "ScooterChargeTask",
                        "juicer_earnings_amount": null,
                        "display_task": {
                            "id": "KPDQBBUDPYVRL",
                            "type": "juicer_tasks",
                            "attributes": {
                                "bike": null,
                                "task_type": "ScooterChargeTask",
                                "due_at": null,
                                "juicer_earnings_amount": {
                                    "currency_code": "NZD",
                                    "amount": 4.25,
                                    "amount_str": "4.25",
                                    "currency_symbol": "$",
                                    "display_string": "$4.25"
                                },
                                "reservation": null,
                                "reservation_time_seconds": 3600,
                                "info_window": {
                                    "title": "Charge XXX-338",
                                    "description": "Charge and drop off at a LimeHub by 07:00 AM"
                                },
                                "expected_due_time": "2020-10-07T18:00:00.000Z",
                                "status": "open",
                                "juicer_earnings_currency": "NZD",
                                "juicer_earnings_amount_cents": 425
                            }
                        },
                        "has_physical_lock": false,
                        "juicer_earnings_currency": null,
                        "juicer_earnings_amount_cents": null
                    }
                },
                {
                    "id": "O7WF3EZAY2ALQ",
                    "type": "juicer_bikes",
                    "attributes": {
                        "status": "locked",
                        "plate_number": "670799",
                        "latitude": -43.527539,
                        "longitude": 172.617434,
                        "last_activity_at": "2020-10-07T06:45:30.000Z",
                        "last_trip_at": "2020-10-07T04:06:19.000Z",
                        "type_name": "scooter",
                        "battery_level": "super_low",
                        "battery_percentage": 16,
                        "meter_range": null,
                        "icon_usage_type": null,
                        "last_three": "799",
                        "already_collected": false,
                        "task_type": "ScooterChargeTask",
                        "juicer_earnings_amount": null,
                        "display_task": {
                            "id": "X456GE3YULPPF",
                            "type": "juicer_tasks",
                            "attributes": {
                                "bike": null,
                                "task_type": "ScooterChargeTask",
                                "due_at": null,
                                "juicer_earnings_amount": {
                                    "currency_code": "NZD",
                                    "amount": 4.25,
                                    "amount_str": "4.25",
                                    "currency_symbol": "$",
                                    "display_string": "$4.25"
                                },
                                "reservation": null,
                                "reservation_time_seconds": 3600,
                                "info_window": {
                                    "title": "Charge XXX-799",
                                    "description": "Charge and drop off at a LimeHub by 07:00 AM"
                                },
                                "expected_due_time": "2020-10-07T18:00:00.000Z",
                                "status": "open",
                                "juicer_earnings_currency": "NZD",
                                "juicer_earnings_amount_cents": 425
                            }
                        },
                        "has_physical_lock": false,
                        "juicer_earnings_currency": null,
                        "juicer_earnings_amount_cents": null
                    }
                },
                {
                    "id": "UG4OIUQOVV3TO",
                    "type": "juicer_bikes",
                    "attributes": {
                        "status": "locked",
                        "plate_number": "108373",
                        "latitude": -43.515596,
                        "longitude": 172.64284,
                        "last_activity_at": "2020-10-07T06:34:05.000Z",
                        "last_trip_at": "2020-10-06T12:06:54.000Z",
                        "type_name": "scooter",
                        "battery_level": "low",
                        "battery_percentage": 23,
                        "meter_range": null,
                        "icon_usage_type": null,
                        "last_three": "373",
                        "already_collected": false,
                        "task_type": "ScooterChargeTask",
                        "juicer_earnings_amount": null,
                        "display_task": {
                            "id": "WZIS774KMTZV4",
                            "type": "juicer_tasks",
                            "attributes": {
                                "bike": null,
                                "task_type": "ScooterChargeTask",
                                "due_at": null,
                                "juicer_earnings_amount": {
                                    "currency_code": "NZD",
                                    "amount": 4.25,
                                    "amount_str": "4.25",
                                    "currency_symbol": "$",
                                    "display_string": "$4.25"
                                },
                                "reservation": null,
                                "reservation_time_seconds": 3600,
                                "info_window": {
                                    "title": "Charge XXX-373",
                                    "description": "Charge and drop off at a LimeHub by 07:00 AM"
                                },
                                "expected_due_time": "2020-10-07T18:00:00.000Z",
                                "status": "open",
                                "juicer_earnings_currency": "NZD",
                                "juicer_earnings_amount_cents": 425
                            }
                        },
                        "has_physical_lock": false,
                        "juicer_earnings_currency": null,
                        "juicer_earnings_amount_cents": null
                    }
                },
                {
                    "id": "QVMPOG3RJIN5K",
                    "type": "juicer_bikes",
                    "attributes": {
                        "status": "maintenance",
                        "plate_number": "689185",
                        "latitude": -43.529889,
                        "longitude": 172.639447,
                        "last_activity_at": "2020-10-07T06:01:23.000Z",
                        "last_trip_at": "2020-10-07T06:01:20.000Z",
                        "type_name": "scooter",
                        "battery_level": "medium",
                        "battery_percentage": 32,
                        "meter_range": null,
                        "icon_usage_type": null,
                        "last_three": "185",
                        "already_collected": false,
                        "task_type": "VehicleRetrievalTask",
                        "juicer_earnings_amount": null,
                        "display_task": {
                            "id": "BUPN5QM6EVZ37",
                            "type": "juicer_tasks",
                            "attributes": {
                                "bike": null,
                                "task_type": "VehicleRetrievalTask",
                                "due_at": null,
                                "juicer_earnings_amount": {
                                    "currency_code": "NZD",
                                    "amount": 3.0,
                                    "amount_str": "3.0",
                                    "currency_symbol": "$",
                                    "display_string": "$3"
                                },
                                "reservation": null,
                                "reservation_time_seconds": 3600,
                                "info_window": {
                                    "title": "Retrieve XXX-185",
                                    "description": "Drop off at a LimeBase within 12 hours"
                                },
                                "expected_due_time": "2020-10-07T18:46:08.617Z",
                                "status": "open",
                                "juicer_earnings_currency": "NZD",
                                "juicer_earnings_amount_cents": 300
                            }
                        },
                        "has_physical_lock": false,
                        "juicer_earnings_currency": null,
                        "juicer_earnings_amount_cents": null
                    }
                }
            ],
            "clusters": [],
            "reserved_bundles": [],
            "bundles": [],
            "reservation_capacity": {
                "scooter_charge_task": {
                    "remaining": 1,
                    "total": 1,
                    "remaining_cancellation_cap": 3,
                    "cancellation_penalty_due_time": null
                },
                "vehicle_retrieval_task": {
                    "remaining": 1,
                    "total": 1,
                    "remaining_cancellation_cap": 3,
                    "cancellation_penalty_due_time": null
                },
                "vehicle_rebalance_task": {
                    "remaining": 0,
                    "total": 0,
                    "remaining_cancellation_cap": 0,
                    "cancellation_penalty_due_time": null
                }
            },
            "icons": [
                {
                    "id": "10",
                    "type": "icons",
                    "attributes": {
                        "url": "https://d22d5yy1i19g9i.cloudfront.net/icons/pin_green_dark_blank.png?fingerprint=d5a9c9c806293f7c90c9ebd4f9bae0bf",
                        "description": "",
                        "description_icon_url": null,
                        "description_link_url": null,
                        "usage_type": "juicer_earnings_bike_high"
                    }
                },
                {
                    "id": "8",
                    "type": "icons",
                    "attributes": {
                        "url": "https://d22d5yy1i19g9i.cloudfront.net/icons/pin_green_light_blank.png?fingerprint=90da4e99bd454a1638b064abe38b1a93",
                        "description": "",
                        "description_icon_url": null,
                        "description_link_url": null,
                        "usage_type": "juicer_earnings_bike_low"
                    }
                },
                {
                    "id": "9",
                    "type": "icons",
                    "attributes": {
                        "url": "https://d22d5yy1i19g9i.cloudfront.net/icons/pin_green_mid_blank.png?fingerprint=8d826a457e7b5cd6ae4d5b79acc965f5",
                        "description": "",
                        "description_icon_url": null,
                        "description_link_url": null,
                        "usage_type": "juicer_earnings_bike_medium"
                    }
                }
            ],
            "map_config": {
                "id": "views::juicer::mapconfig",
                "type": "juicer_map_config",
                "attributes": {
                    "cluster_view_enabled": true,
                    "cluster_view_zoom_level": 12,
                    "refresh_seconds": 10
                }
            }
        }
    },
    "meta": {
        "latest_user_agreement_version": "2",
        "min_ios_version": "2.22.0",
        "min_android_code": 1119,
        "flags": "IOS_VERSION_V1.0,ANDROID_VERSION_V1.0",
        "groups": {
            "recommend_nearby_bike_v2": true,
            "server_side_id_verification": false,
            "customized_speed_cap_enabled": false,
            "top_banner_carousel": false,
            "use_banner_v2": true,
            "request_bluetooth_permission_at_unlock_screen": null,
            "use_trip_summary_v2": false,
            "use_new_microblink": true,
            "use_tutorial_v2": false,
            "use_app_refresh_theme": false,
            "simplify_unlock_new_map_experience": false,
            "map_improvements": {
                "battery_sort": true,
                "cache_zones": true,
                "clustering": true,
                "fetch_zones": false,
                "icons": true
            },
            "use_referrals_v2": false,
            "zone_messaging_enabled": false,
            "group_ride_entry_point": "default",
            "enable_stripe_sca_flow": true,
            "zip_code_country_selector": false,
            "area_rate_plan_on_scanner": true,
            "backend_driven_trip_rating": true,
            "bike_reservation": true,
            "enable_promo_notification_optout": true,
            "show_auto_reload": true,
            "map_levels_v1": true,
            "braze_integration": true,
            "take_photo": "find_my_ride",
            "show_battery_level_on_map": true,
            "unlock_confirmation": false,
            "short_stop": true,
            "bluetooth_unlock": true,
            "unlock_button_group": "white_bar",
            "parked_or_not": true,
            "persist_rate_ride": true,
            "default_to_unlock_group": "control",
            "fetch_end_trip_experience": true,
            "long_pause_group": false,
            "no_header_map": true,
            "branch_link_referral": true,
            "group_ride_v2": false,
            "donation_group": "control",
            "group_ride_max_guest_cap": "10",
            "group_ride_max_rider_cap": "5",
            "group_ride_revamp": false,
            "group_ride": false,
            "id_scanner": "google_vision",
            "id_scan_show_manual_delay_sec": 15,
            "group_ride_revamp_two_point_one": false,
            "cvv_optional": false,
            "auto_reload_on_by_default": true,
            "new_method_completing_trip": true,
            "auto_reload_always_enabled": false,
            "show_group_ride_tutorial": true,
            "auto_reload_experience_updates": true,
            "android_trip_events_refactor": false,
            "remove_add_balance_confirmation": false,
            "scooter_reservation": true,
            "timeout_retry": false,
            "use_client_groups": false,
            "use_moshi": false,
            "cancel_reserve_red_button": true,
            "android_how_to_ride_tutorial": false,
            "show_loyalty_spend_points": false,
            "show_self_help": false,
            "show_loyalty": true,
            "map_style_with_poi": false,
            "comfort_ride_enabled": false,
            "ride_history_with_pagination": true,
            "payment_billing_address": false,
            "payment_creation_ui": true,
            "payment_cardholder_name": false,
            "apple_pay_address_ui": false,
            "card_scanner": null,
            "enable_google_pay": false,
            "klarna_payment_method": false,
            "paypal_payment_method": false,
            "payment_zip_code": false,
            "payments": {
                "cvv_optional": false,
                "payment_card_io_scan": null,
                "payment_creation_ui": true,
                "payment_billing_address": false,
                "payment_cardholder_name": false,
                "payment_zip_code": false
            },
            "apple_pay": true,
            "map_balance_icon": false,
            "juicer_satellite_mode": true,
            "juicer_level_2": true,
            "ios_juicer_rebalance_v1": false,
            "android_juicer_rebalance_v1": false,
            "juicer_hide_scooter_details": false,
            "enable_juicer_mock_gps_blocker": true,
            "enable_juicer_settings": true,
            "enable_juicer_in_app_message": true,
            "ios_juicer_multi_task_v1": true,
            "android_juicer_multi_task_v1": true,
            "complete_trip_before_take_photo": true,
            "android_upload_juicer_attributes": true,
            "enable_juicer_endpoint_v2": true,
            "juicer_bluetooth_unlock": false,
            "android_enable_backend_driven_cancel_task": true,
            "android_tooltip_v2": true,
            "android_enable_bulk_scan_of_deploy_tasks": false,
            "ios_juicer_task_bundle": false,
            "android_juicer_task_bundle": false,
            "enable_juicer_vat_profile": false,
            "enable_juicer_backend_banner": false,
            "enable_juicer_in_app_funnel": false,
            "use_backend_driven_earn_with_lime_button": false,
            "use_backend_driven_switch_to_juicer_mode_button": false,
            "juicer_earnings_notification": true,
            "edit_email_magic_link": false
        },
        "trip_id": null,
        "trip_status": null,
        "group_id": null,
        "group_ride_status": null,
        "group_ride_version": "legacy",
        "notifications": [],
        "messages": [],
        "country_code": "",
        "user_agreement_version": 2,
        "user_agreement_country_code": "",
        "need_to_show_agreement": false,
        "user_agreement_url": "https://li.me/user-agreement/",
        "user_agreement_title": "We've updated our User Agreement",
        "user_agreement_message": "By clicking ‘I agree’, you confirm that you have read, understood and agreed to Lime’s updated User Agreement.",
        "user_agreement_primary_button": "I agree",
        "user_agreement_view_terms_button": "View agreement",
        "need_to_show_group_ride_agreement": true,
        "current_rental_id": null,
        "current_rental_status": null
    }
}
