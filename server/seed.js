const { Pool } = require('pg');

const pool = require('./dbConn');

pool.query(`INSERT INTO language (lan_type, lan_country, lan_symbol) VALUES
        ('English', 'United Staes', 'English (US)'),
        ('Azərbaycan dili', 'Azərbaycan', 'Azərbaycan dili (AZ)'),
        ('Bahasa Indonesia', 'Indonesia', 'Bahasa Indonesia (ID)'),
        ('Bosanski', 'Bosna i Herzegovina', 'Bosanski (BA)'),
        ('Catalá', 'Espanya', 'Català (ES)'),
        ('Dansk', 'Danmark', 'Dansk (DK)'),
        ('Deutsch', 'Deutschland', 'Deutsch (DE)')
        ON CONFLICT (lan_id) DO NOTHING`)
    .then((data) => {
        console.log(data);
        return pool.query(`INSERT INTO currency (cur_country, cur_type, cur_symbol) VALUES
            ('United States dollar', 'USD-$', '$  USD'),
            ('Australian dollar', 'AUD-$', '$  AUD'),
            ('Brazillian real', 'BRL-R$', 'R$  BRL'),
            ('Bulgarian lev', 'BGN-лв', 'лв  BGN'),
            ('Candian dollar', 'CAD-$', '$  CAD'),
            ('EURO', 'EUR-€', '€  EUR'),
            ('Japanese yen', 'JPY-¥', '¥  JPY')
            ON CONFLICT (cur_id) DO NOTHING`)
    })
.then((data) => {
    console.log(data);
    return pool.query(`INSERT INTO amenities (symbol, sym_descrip) VALUES
        ('queen bed', 'https://www.palms.com/wp-content/uploads/2022/10/Bed-Fixed.png'),
        ('single bed', 'https://www.bringfido.com/assets/images/illustrations/beds/units/1-1%40lg.png'),
        ('wifi', 'https://cdn-icons-png.flaticon.com/512/467/467522.png'),
        ('Private patio or balcony', 'https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/balcony-icon.png'),
        ('Hair dryer', 'https://cdn-icons-png.flaticon.com/512/6367/6367568.png'),
        ('Bed linens', 'https://voya-havana.com/wp-content/uploads/2022/03/Egyptian-Cotton-Sheets.png'),
        ('TV', 'https://cdn1.iconfinder.com/data/icons/hotel-app-website-software-program-1/512/Hotel_App_Outlined_lineart_modern_hostel_lodge_facility_facilities_amenities_amenity_TV_television-512.png'),
        ('Heat', 'https://cdn2.iconfinder.com/data/icons/room-facilities-part-1/64/_Heating-512.png'),
        ('Smoke alarm', 'https://icons.veryicon.com/png/128/business/office-configuration/smoke-detector-2.png'),
        ('Freezer', 'https://cdn-icons-png.flaticon.com/512/333/333511.png'),
        ('Private entrance', 'https://icons-for-free.com/download-icon-door-1321215617330160161_512.png'),
        ('Outdoor furniture', 'https://cdn.shopify.com/s/files/1/0423/4649/files/Outdoor_Furniture_Icon_44a36797-612f-4138-8273-24d9cad0064b_1600x.png?v=1614324803'),
        ('Free parking on premises', 'http://cdn.onlinewebfonts.com/svg/img_22967.png'),
        ('Self check-in', 'https://cdn-icons-png.flaticon.com/512/263/263069.png'),
        ('Pets allowed', 'https://icons.veryicon.com/png/o/miscellaneous/commonly-used-2/paw-9.png'),
        ('Smoking', 'https://cdn3.iconfinder.com/data/icons/restaurants-1-1/66/68-512.png'),
        ('Air conditioning', 'https://icons.veryicon.com/png/o/transport/car-dashboard-symbol/air-conditioner-4.png')
        ON CONFLICT (amenity_id) DO NOTHING`)
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log('Insert rows failed', error);
})