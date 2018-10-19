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
            bundles.Add(new ScriptBundle("~/bundles/react")
                .Include("~/node_modules/react/umd/react.development.js")
                .Include("~/node_modules/react-dom/umd/react-dom.development.js")
                );
        }
    }
}