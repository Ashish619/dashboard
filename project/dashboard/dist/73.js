webpackJsonp([73],{1900:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=(a(34),a(33)),n=l(r),u=(a(45),a(38)),s=l(u),o=(a(46),a(128)),d=l(o),c=(a(416),a(415)),f=l(c),m=a(1),i=l(m),p=a(83),g=a(1279),E=l(g),P=f["default"].Item,y=function(e){function t(){o(function(e,t){e||l(t)})}var a=e.loginButtonLoading,l=e.onOk,r=e.form,u=r.getFieldDecorator,o=r.validateFieldsAndScroll;return i["default"].createElement("div",{className:E["default"].form},i["default"].createElement("div",{className:E["default"].logo},i["default"].createElement("img",{src:p.config.logoSrc}),i["default"].createElement("span",null,"Berr Admin")),i["default"].createElement("form",null,i["default"].createElement(P,{hasFeedback:!0},u("username",{rules:[{required:!0,message:"Please Enter Your User Name"}]})(i["default"].createElement(d["default"],{size:"large",onPressEnter:t,placeholder:"Username"}))),i["default"].createElement(P,{hasFeedback:!0},u("password",{rules:[{required:!0,message:"Please Enter Your Password"}]})(i["default"].createElement(d["default"],{size:"large",type:"password",onPressEnter:t,placeholder:"Password"}))),i["default"].createElement(n["default"],null,i["default"].createElement(s["default"],{type:"primary",size:"large",onClick:t,loading:a},"Login")),i["default"].createElement("p",null,i["default"].createElement("span",null,"User Name\uff1aguest"),i["default"].createElement("span",null,"Password\uff1aguest"))))};y.propTypes={form:m.PropTypes.object,loginButtonLoading:m.PropTypes.bool,onOk:m.PropTypes.func},t["default"]=f["default"].create()(y),e.exports=t["default"]}});