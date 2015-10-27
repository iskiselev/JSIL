using System;

public static class Program {
    public static void Main (string[] args)
    {
        WriteIntegerValue(-1);
    }

    private static void WriteIntegerValue(long value)
    {
        ulong uvalue = 0;

        if (value < 0)
        {
            uvalue = (ulong) -value;
        }
        else
        {
            uvalue = (ulong) value;
        }

        if (value < 0)
            Console.Write("-");

        Console.Write(uvalue);
    }
}