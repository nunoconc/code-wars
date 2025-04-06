package org.example;

import java.math.BigInteger;

public class LagrangeFourSquareTheorem {

    public static BigInteger[] lagrangeFourSquareTheorem (BigInteger n)
    {
        BigInteger[] result = new BigInteger[4];
        result[0] = BigInteger.ZERO;
        result[1] = BigInteger.ZERO;
        result[2] = BigInteger.ZERO;
        result[3] = BigInteger.ZERO;

        BigInteger sum = result[0].pow(2).add(result[1].pow(2)).add(result[2].pow(2)).add(result[3].pow(2));

        int position = 0;


        while (sum.compareTo(n) != 0) {
            if(position >= 4) {
                result[0] = result[0].subtract(new BigInteger("1"));
                position = 1;
            }

            if(sum.compareTo(n) > 0 ) {
                result[position] = result[position].subtract(new BigInteger("1"));
                position += 1;
            } else {
                result[position] = result[position].add(new BigInteger("1"));
            }

            sum = result[0].pow(2).add(result[1].pow(2)).add(result[2].pow(2)).add(result[3].pow(2));
        }

        return result;
    }
}
