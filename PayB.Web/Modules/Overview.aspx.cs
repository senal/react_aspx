using System;

namespace PayB.Web.Modules
{
    public partial class Overview : System.Web.UI.Page
    {
        private int _userId;
        public int UserId { get { return _userId; } }

        protected void Page_Load(object sender, EventArgs e)
        {
            _userId = 100;
        }
    }
}