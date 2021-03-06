var data = [
    {"value": "9909193766", "expected": true, "message": "10 digit valid"},
    {"value": "9909193776", "expected": false, "message": "10 digit invalid"    },
    {"value": "990919-3766", "expected": true, "message": "11 digit valid"    },
    {"value": "990919-3776", "expected": false, "message": "11 digit invalid"    },
    {"value": "990919+3766", "expected": true, "message": "11 digit valid with plus"    },
    {"value": "990919+3776", "expected": false, "message": "11 digit invalid with plus"    },
    {"value": "990919_3766", "expected": false, "message": "11 digit invalid delimiter"    },
    {"value": "199909193766", "expected": true, "message": "12 digit valid"    },
    {"value": "199909193776", "expected": false, "message": "12 digit invalid"    },
    {"value": "19990919-3766", "expected": true, "message": "13 digit valid"    },
    {"value": "19990919-3776", "expected": false, "message": "13 digit invalid"    },
    {"value": "19990919+3766", "expected": true, "message": "13 digit valid with plus"    },
    {"value": "19990919+3776", "expected": false, "message": "13 digit invalid with plus"    },
    {"value": "19990919_3766", "expected": false, "message": "13 digit invalid delimiter"    },
    {"value": "Random crap", "expected": false, "message": "random crap"    },
    {"value": "", "expected": false, "message": "empty string"    },
    {"value": "9999999999", "expected": false, "message": "10 digit invalid date"    },
    {"value": "199999999999", "expected": false, "message": "12 digit invalid date"    },
    {"value": "9913131315", "expected": false, "message": "10 digit invalid month"    },
    {"value": "9911311232", "expected": false, "message": "10 digit invalid date"    },
    {"value": "9902291237", "expected": false, "message": "10 digit invalid leap year"    }
];

module('Sweden');

test('Is supported', function () {
    ok(Luhnar.supportsCountry('SE'), 'Country SE should be supported');
});

test('Validation', function () {
    data.forEach(function (item) {
        equal(Luhnar.validate(item.value, 'se'), item.expected, item.message);
    });
});