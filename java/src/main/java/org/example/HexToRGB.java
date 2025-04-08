package org.example;

import java.util.HashMap;

public class HexToRGB {

    public static int getCharValue(char c) {
        if (c >= 97) {
            return c - 'a' + 10;
        } else if (c >= 65) {
            return c - 'A' + 10;
        } else {
            return c - '0';
        }

    }

    public static HashMap<String, Integer> hexStringToRGB(String hex) {

        HashMap<String, Integer> result = new HashMap<>();

        result.put("r", getCharValue(hex.charAt(1)) * 16 + getCharValue(hex.charAt(2)));
        result.put("g", getCharValue(hex.charAt(3)) * 16 + getCharValue(hex.charAt(4)));
        result.put("b", getCharValue(hex.charAt(5)) * 16 + getCharValue(hex.charAt(6)));

        return result;
    }


}