using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Optimization;

namespace PayB.Web
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/app").Include(
           "~/Assets/Scripts/main.build.js"));
        }
    }
}