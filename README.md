# Lime Juicer API Documentation

## Login

:warning: You will need a Lime account with juicer mode enabled to get locations of low battery scooters :warning:

**Base URL for login**: `https://web-production.lime.bike/api/rider`

Login requires two steps:

+ Request an OTP code that is sent to you by SMS
+ Send back the OTP code to get an Auth token

### Request SMS code

**Method**: `GET`

**Path**: `/v1/login`

**Parameters**:

| Parameters | Descriptions             | Mandatory |
| ---------- | ------------------------ | :-------: |
| phone      | phone number intl format | X         |


When entering a phone number, make sure to include the `%2B` before the number instead of the `+` (Example: %2B12222222222 is +1 (222) 222-2222)

**Example**

```
curl --request GET \
  --url 'https://web-production.lime.bike/api/rider/v1/login?phone=%2B33612345678'
```

### Send back OTP code

**Method**: `POST`

**Path**: `/v1/login`

**Header**:

| Header       | Value            | Mandatory |
| ------------ | ---------------- | :-------: |
| content-type | application/json | X         |

**Parameters**:

| Parameters | Descriptions             | Mandatory |
| ---------- | ------------------------ | :-------: |
| phone      | phone number intl format | X         |
| login_code | OTP code (length of 6)   | X         |


**Example**

```bash
curl --request POST \
  --cookie-jar - \
  --url 'https://web-production.lime.bike/api/rider/v1/login' \
  --header 'Content-Type: application/json' \
  --data '{"login_code": "123456", "phone": "+33612345678"}'
```

```
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX3Rva2VuIjoiRk9PQkFSRUlSWkhBMiIsImxvZ2luX2NvdW50IjoyfQ.K5nmvUu92hYXQyeYG6O0rqo0ef2mkp7PMdtp9NrgwOE",
    "user": {
        "id": "FOOBAREIRZHA2",
        "type": "users",
        "attributes": {
            "token": "FOOBAREIRZHA2",
            "phone_number": "33612345678",
            "email_address": null,
            "has_verified_email_address": false,
            "name": "Lime Rider",
            "given_name": "Lime",
            "surname": "Rider",
            "default_payment_method": null,
            "referral_code": "REZHETH",
            "num_trips": 0,
            "edu": false,
            "subscription_item_states": [],
            "juicer_profile_status": active, --- This needs to be active to get juicable scooters.
            "juicer_profile_initial_activated_at": <ACTIVATION DATE>,
            "balance_cents": 0,
            "pending_balance_cents": 0,
            "currency": "USD"
        }
    }
}
```

Cookie


```
_limebike-web_session	U0pwQlVjcVRwMXZUTWovcHh3U251MERYTGE2dWpMdFdmNW9sL0d4SHBRVGtZd2VXN20yMjhJczhlR21nUkVHczlEREUweGNpYmtEWVFvQXBoQVNuRWdZWkVBajJPaHhDeStuUmttYVdYYWVsRDJEMUZvNE5YNU4xc1FlcjlDMi8xOVNMcDM3M3JhQWd0TDF2OWphMGR3PT0tLTBDYUtNeUJLcXRmNVd4YnorSEhlTWc9PQ%3D%3D--c8889db210d22bb4a96307b74d39c4b64d48777f
```

### Login with Email

#### Send Magic Link

**Method**: `POST`

**Path**: `/v2/onboarding/magic-link`

**Header**:

| Header       | Value                             | Mandatory |
| ------------ | --------------------------------- | :-------: |
| Content-Type | application/x-www-form-urlencoded | X         |

**Body**:

`email=<your-email>&user_agreement_country_code=US&user_agreement_version=4`

**Cookie**:

```
_limebike-web_session	U0pwQlVjcVRwMXZUTWovcHh3U251MERYTGE2dWpMdFdmNW9sL0d4SHBRVGtZd2VXN20yMjhJczhlR21nUkVHczlEREUweGNpYmtEWVFvQXBoQVNuRWdZWkVBajJPaHhDeStuUmttYVdYYWVsRDJEMUZvNE5YNU4xc1FlcjlDMi8xOVNMcDM3M3JhQWd0TDF2OWphMGR3PT0tLTBDYUtNeUJLcXRmNVd4YnorSEhlTWc9PQ%3D%3D--c8889db210d22bb4a96307b74d39c4b64d48777f
```

**Example**

```
curl 'https://web-production.lime.bike/api/rider/v2/onboarding/magic-link' \
-X POST \
-H 'Content-Type: application/x-www-form-urlencoded; charset=utf-8' \
-d 'email=<your-email>&user_agreement_country_code=US&user_agreement_version=4'
```

#### Use Magic Link

**Method**: `POST`

**Path**: `/v2/onboarding/login`

**Header**:

| Header       | Value                             | Mandatory |
| ------------ | --------------------------------- | :-------: |
| Content-Type | application/x-www-form-urlencoded | X         |

**Body**:

`magic_link_token=<your-magic-link-token`

**Cookie**:

```
_limebike-web_session	U0pwQlVjcVRwMXZUTWovcHh3U251MERYTGE2dWpMdFdmNW9sL0d4SHBRVGtZd2VXN20yMjhJczhlR21nUkVHczlEREUweGNpYmtEWVFvQXBoQVNuRWdZWkVBajJPaHhDeStuUmttYVdYYWVsRDJEMUZvNE5YNU4xc1FlcjlDMi8xOVNMcDM3M3JhQWd0TDF2OWphMGR3PT0tLTBDYUtNeUJLcXRmNVd4YnorSEhlTWc9PQ%3D%3D--c8889db210d22bb4a96307b74d39c4b64d48777f
```

**Example**

```
curl 'https://web-production.lime.bike/api/rider/v2/onboarding/login' \
-X POST \
-H 'Content-Type: application/x-www-form-urlencoded; charset=utf-8' \
-d 'magic_link_token=<your-magic-link-token>'
```

## Get harvestable vehicles

:warning: Auth (bearer AND cookie) are mandatory for this endpoint :warning:

**URL**: `https://juicer.lime.bike/api/rider/v2/juicer/views/main`

**Method**: `GET`

**Header**:

| Header        | Value        | Mandatory |
| ------------- | ------------ | :-------: |
| Authorization | Bearer TOKEN | X         |

**Cookie**:

| Cookie                | Mandatory |
| --------------------- | :-------: |
| _limebike-web_session | X         |

**Parameters**:

| Parameters           | Type         | Mandatory | Remarks                                                             |
| -------------------- | ------------ | :-------: |---------------------------------------------------------------------|
| filter               | Latitude     | X         | The value for this is `%2A`                                         |
| ne_lat               | Latitude     | X         | Bounding box for map; apparently ignored in favor of zoom parameter |
| ne_lng               | Longitude    | X         | Bounding box for map; apparently ignored in favor of zoom parameter |
| sw_lat               | Latitude     | X         | Bounding box for map; apparently ignored in favor of zoom parameter |
| sw_lng               | Longitude    | X         | Bounding box for map; apparently ignored in favor of zoom parameter |
| user_latitude        | Latitude     | X         |                                                                     |
| user_longitude       | Longitude    | X         |                                                                     |
| zoom                 | Integer      | X         | When < 15, bikes are clustered                                      |

**Example**

```bash
curl --location --request GET 'https://juicer.lime.bike/api/rider/v2/juicer/views/main?ne_lat=<NE-LAT>&ne_lng=<NE-LNG>&sw_lat=<SW-LAT>&sw_lng=<SW-LNG>&user_latitude=<USER-LAT>&user_longitude=<USER-LNG>&zoom=14.03357&filter=%2A' \
--header 'Authorization: Bearer <TOKEN>' \
--header '_limebike-web_session	U0pwQlVjcVRwMXZUTWovcHh3U251MERYTGE2dWpMdFdmNW9sL0d4SHBRVGtZd2VXN20yMjhJczhlR21nUkVHczlEREUweGNpYmtEWVFvQXBoQVNuRWdZWkVBajJPaHhDeStuUmttYVdYYWVsRDJEMUZvNE5YNU4xc1FlcjlDMi8xOVNMcDM3M3JhQWd0TDF2OWphMGR3PT0tLTBDYUtNeUJLcXRmNVd4YnorSEhlTWc9PQ%3D%3D--c8889db210d22bb4a96307b74d39c4b64d48777f'
```

**Output:**

The dates have been changed in this example output.

```
            "vehicles": [
                {
                    "id": "O7WF3EZAY2ALQ",
                    "type": "juicer_bikes",
                    "attributes": {
                        "status": "locked",
                        "plate_number": "670799",
                        "latitude": <Latitude>,
                        "longitude": <Longitude>,
                        "last_activity_at": "2020-00-00T00:00:00.000Z",
                        "last_trip_at": "2020-00-00T00:00:00.000Z",
                        "type_name": "scooter",
                        "battery_level": "super_low",
                        "battery_percentage": 15,
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
                                "expected_due_time": "2020-00-00T00:00:00.000Z",
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
            ],
```

## Get LimeHub Locations

**URL**: `https://juicer.lime.bike/api/rider/v2/juicer/views/deploy`

**Method**: `GET`

**Header**:

| Header        | Value        | Mandatory |
| ------------- | ------------ | :-------: |
| authorization | Bearer TOKEN | X         |

**Cookie**:

| Cookie                | Mandatory |
| --------------------- | :-------: |
| _limebike-web_session | X         |

**Parameters**:

| Parameters           | Type         | Mandatory | Remarks                                                             |
| -------------------- | ------------ | :-------: |---------------------------------------------------------------------|
| filter               | Latitude     | X         | The value for this is `%2A`                                         |
| ne_lat               | Latitude     | X         | Bounding box for map; apparently ignored in favor of zoom parameter |
| ne_lng               | Longitude    | X         | Bounding box for map; apparently ignored in favor of zoom parameter |
| sw_lat               | Latitude     | X         | Bounding box for map; apparently ignored in favor of zoom parameter |
| sw_lng               | Longitude    | X         | Bounding box for map; apparently ignored in favor of zoom parameter |
| user_latitude        | Latitude     | X         |                                                                     |
| user_longitude       | Longitude    | X         |                                                                     |
| zoom                 | Integer      | X         | When < 15, hubs are clustered                                      |

**Example**

```bash
curl --location --request GET 'https://juicer.lime.bike/api/rider/v2/juicer/views/deploy?ne_lat=<NE-LAT>&ne_lng=<NE-LNG>&sw_lat=<SW-LAT>&sw_lng=<SW-LNG>&user_latitude=<USER-LAT>&user_longitude=<USER-LNG>&zoom=14&filter=%2A' \
--header 'Authorization: Bearer <TOKEN>' \
--header '_limebike-web_session	U0pwQlVjcVRwMXZUTWovcHh3U251MERYTGE2dWpMdFdmNW9sL0d4SHBRVGtZd2VXN20yMjhJczhlR21nUkVHczlEREUweGNpYmtEWVFvQXBoQVNuRWdZWkVBajJPaHhDeStuUmttYVdYYWVsRDJEMUZvNE5YNU4xc1FlcjlDMi8xOVNMcDM3M3JhQWd0TDF2OWphMGR3PT0tLTBDYUtNeUJLcXRmNVd4YnorSEhlTWc9PQ%3D%3D--c8889db210d22bb4a96307b74d39c4b64d48777f'
```

**Output**

```
            "nearby_hotspots": [
                {
                    "id": "7ACHD6G4ZQUIX",
                    "type": "juicer_hotspots",
                    "attributes": {
                        "destination_type": "Hotspot",
                        "latitude": "-43.529987",
                        "longitude": "172.597763",
                        "radius": 32.1868,
                        "capacity": 4,
                        "remaining_capacity": 4,
                        "selected_icon_usage_type": "juicer_hotspots_selected",
                        "unselected_icon_usage_type": "juicer_hotspots_unselected",
                        "reserved_unselected_icon_usage_type": "juicer_hotspots_reserved_unselected",
                        "reserved_selected_icon_usage_type": "juicer_hotspots_reserved_selected",
                        "place_name": "Smilesville Cosmetic Orthodontics Invisalign Implants, dentist",
                        "description": null,
                        "image_url": "https://d1r9t42himsgro.cloudfront.net/juicer-deploy-photos/MMZHKNFE34W7W/2018-11-09/4BWON4HLP6V5B.jpeg",
                        "reserver_id": null,
                        "reserved_at": null,
                        "reservation_time": "60",
                        "priority": 0,
                        "address": "",
                        "receiving_type": "scooter"
                    }
                },
               ...
            ],
            "nearby_dropspots": [
                {
                    "id": "Y3B4VLNR26XRN",
                    "type": "juicer_dropspots",
                    "attributes": {
                        "destination_type": "Dropspot",
                        "latitude": "-43.538566",
                        "longitude": "172.694125",
                        "radius": 80.467,
                        "capacity": 10000,
                        "remaining_capacity": 8679,
                        "selected_icon_usage_type": "juicer_dropspots_selected",
                        "unselected_icon_usage_type": "juicer_dropspots_unselected",
                        "place_name": "Lime Warehouse",
                        "description": "Please drop the scooters to the right of first slider door. If you need assistance, please ring the bell on the front door. ",
                        "image_url": "https://limebike-web-public-assets.s3-us-west-1.amazonaws.com/dropspots/VEIBA3SUB23OOHXV",
                        "address": "2/120 Maces Rd"
                    }
```

## View Collected Limes

**URL**: `https://web-production.lime.bike/api/rider/v1/juicer/views/collected`

**Method**: `GET`

**Header**:

| Header        | Value        | Mandatory |
| ------------- | ------------ | :-------: |
| authorization | Bearer TOKEN | X         |

**Cookie**:

| Cookie                | Mandatory |
| --------------------- | :-------: |
| _limebike-web_session | X         |
