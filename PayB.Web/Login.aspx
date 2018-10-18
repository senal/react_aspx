<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="PayB.Web.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="frmLogin" runat="server">
        <div>
            <asp:Label runat="server" AssociatedControlID="txtUserName"></asp:Label>
        </div>
        <div>
            <asp:TextBox runat="server" ID="txtUserName"></asp:TextBox>
        </div>
        <div>
            <asp:Label runat="server" AssociatedControlID="txtUserName"></asp:Label>
        </div>
        <div>
            <asp:TextBox runat="server" ID="txtPassword"></asp:TextBox>
        </div>
        <div>
            <asp:Button ID="btnLogin" Text="Login" runat="server" OnClick="btnLogin_Click" />
        </div>
    </form>
</body>
</html>
