package org.example;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class ReverseWords {

    public static String reverseWords(final String original) {
        StringBuilder result = new StringBuilder();
        StringBuilder word = new StringBuilder();

        for(int i = 0; i < original.length() ; ++i) {
            char curr = original.charAt(i);

            if(curr != ' ') {
                word.append(curr);
            } else {
                result.append(word.reverse()).append(' ');
                word = new StringBuilder();
            }

            if(i + 1 == original.length()) {
                result.append(word.reverse());
            }
        }

        return result.toString();
    }
}


