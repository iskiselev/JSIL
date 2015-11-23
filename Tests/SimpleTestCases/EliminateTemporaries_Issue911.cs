using System;

public static class Program
{
    public static class TmpClss
    {
        public static Holder TmpClssValue;
    };

    public static void Main(string[] args)
    {
        if (TmpClss.TmpClssValue == null)
        {
            TmpClss.TmpClssValue = new Holder();
            TmpClss.TmpClssValue.Value = "!";
        }
        var tmp = TmpClss.TmpClssValue.Value;
        ChangeField();

        Console.WriteLine(tmp);
    }

    public static void ChangeField()
    {
        TmpClss.TmpClssValue = new Holder();
        TmpClss.TmpClssValue.Value = "!!";
    }
}

public class Holder
{
    public string Value;
}