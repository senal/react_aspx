<%@ Page Title="" Language="C#" MasterPageFile="~/Modules/PayBMaster.Master" AutoEventWireup="true" CodeBehind="Overview.aspx.cs" Inherits="PayB.Web.Modules.Overview" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="content" runat="server">
    <div id="customeroverview" data-user-id="<%= UserId %>"></div>
    <div id="billerlist" data-user-id="<%= UserId %>"></div>
</asp:Content>

