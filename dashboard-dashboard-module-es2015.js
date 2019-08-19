(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/dashboard/components/chat/chat.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/dashboard/components/chat/chat.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-panel card card-default\">\n    <div class=\"card-header\">\n        <i class=\"fa fa-comments fa-fw\"></i>\n        Chat\n        <div class=\" pull-right\" ngbDropdown>\n            <button class=\"btn btn-secondary btn-sm\" ngbDropdownToggle>\n                <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu dropdown-menu-right\">\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fa fa-refresh fa-fw\"></i> Refresh</a>\n                </li>\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fa fa-check-circle fa-fw\"></i> Available</a>\n                </li>\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\n                    <i class=\"fa fa-times fa-fw\"></i> Busy</a>\n                </li>\n                <li class=\"divider dropdown-divider\"></li>\n                <li role=\"menuitem\">\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <i class=\"fa fa-times fa-fw\"></i> Busy\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\" class=\"dropdown-item\">\n                        <i class=\"fa fa-clock-o fa-fw\"></i> Away\n                    </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                  <a href=\"#\" class=\"dropdown-item\">\n                    <i class=\"fa fa-sign-out fa-fw\"></i> Sign Out\n                  </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <!-- /.panel-heading -->\n    <div class=\"card-body\">\n        <ul class=\"chat\">\n            <li class=\"left clearfix\">\n                <span class=\"chat-img pull-left\">\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n                <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\n                        <small class=\"pull-right text-muted\">\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 12 mins ago\n                        </small>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n            <li class=\"right clearfix\">\n                <span class=\"chat-img pull-right\">\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n                <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                        <small class=\" text-muted\">\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 13 mins ago\n                        </small>\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n            <li class=\"left clearfix\">\n                <span class=\"chat-img pull-left\">\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n                <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\n                        <small class=\"pull-right text-muted\">\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago\n                        </small>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n            <li class=\"right clearfix\">\n                <span class=\"chat-img pull-right\">\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\n                </span>\n                <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                        <small class=\" text-muted\">\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago\n                        </small>\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n        </ul>\n    </div>\n    <!-- /.card-body -->\n    <div class=\"card-footer\">\n        <div class=\"input-group\">\n            <input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Type your message here...\">\n            <span class=\"input-group-btn\">\n                <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\n                    Send\n                </button>\n            </span>\n        </div>\n    </div>\n    <!-- /.card-footer -->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/dashboard/components/notification/notification.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/dashboard/components/notification/notification.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\n    <div class=\"list-group\">\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-comment fa-fw\"></i> New Comment\n            <span class=\"float-right text-muted small\"><em>4 minutes ago</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\n            <span class=\"float-right text-muted small\"><em>12 minutes ago</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-envelope fa-fw\"></i> Message Sent\n            <span class=\"float-right text-muted small\"><em>27 minutes ago</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-tasks fa-fw\"></i> New Task\n            <span class=\"float-right text-muted small\"><em>43 minutes ago</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\n            <span class=\"float-right text-muted small\"><em>11:32 AM</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-bolt fa-fw\"></i> Server Crashed!\n            <span class=\"float-right text-muted small\"><em>11:13 AM</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-warning fa-fw\"></i> Server Not Responding\n            <span class=\"float-right text-muted small\"><em>10:57 AM</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\n            <span class=\"float-right text-muted small\"><em>9:49 AM</em></span>\n        </a>\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\n            <i class=\"fa fa-money fa-fw\"></i> Payment Received\n            <span class=\"float-right text-muted small\"><em>Yesterday</em></span>\n        </a>\n    </div>\n    <!-- /.list-group -->\n    <a href=\"#\" class=\"btn btn-default btn-block\">View All Alerts</a>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/dashboard/components/timeline/timeline.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/dashboard/components/timeline/timeline.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\n    <ul class=\"timeline\">\n        <li>\n            <div class=\"timeline-badge\"><i class=\"fa fa-check\"></i>\n            </div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                    <p><small class=\"text-muted\"><i class=\"fa fa-clock-o\"></i> 11 hours ago via Twitter</small>\n                    </p>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas suscipit facere rem dicta, debitis.</p>\n                </div>\n            </div>\n        </li>\n        <li class=\"timeline-inverted\">\n            <div class=\"timeline-badge warning\"><i class=\"fa fa-credit-card\"></i>\n            </div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis alias, officia repellendus.</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.</p>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"timeline-badge danger\"><i class=\"fa fa-bomb\"></i>\n            </div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.</p>\n                </div>\n            </div>\n        </li>\n        <li class=\"timeline-inverted\">\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!</p>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"timeline-badge info\"><i class=\"fa fa-save\"></i>\n            </div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla qui! Laborum, atque.</p>\n                    <hr>\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\n                            <i class=\"fa fa-gear\"></i>  <span class=\"caret\"></span>\n                        </button>\n                        <ul class=\"dropdown-menu\" role=\"menu\">\n                            <li><a href=\"#\">Action</a>\n                            </li>\n                            <li><a href=\"#\">Another action</a>\n                            </li>\n                            <li><a href=\"#\">Something else here</a>\n                            </li>\n                            <li class=\"divider\"></li>\n                            <li><a href=\"#\">Separated link</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure expedita, incidunt unde quis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur nostrum sequi. Consequuntur, commodi.</p>\n                </div>\n            </div>\n        </li>\n        <li class=\"timeline-inverted\">\n            <div class=\"timeline-badge success\"><i class=\"fa fa-graduation-cap\"></i>\n            </div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam, enim incidunt quisquam maxime neque eaque.</p>\n                </div>\n            </div>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/dashboard/dashboard.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/dashboard/dashboard.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <h2 class=\"text-muted\">Dashboard <small>Statistics Overview</small></h2>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <ngb-carousel>\n                <ng-template ngbSlide *ngFor=\"let slider of sliders\">\n                    <img class=\"img-fluid mx-auto d-block\" [src]=\"slider.imagePath\" alt=\"Random first slide\" width=\"100%\">\n                    <div class=\"carousel-caption\">\n                        <h3>{{slider.label}}</h3>\n                        <p>{{slider.text}}</p>\n                    </div>\n                </ng-template>\n            </ngb-carousel>\n        </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-6\">\n            <app-stat [bgClass]=\"'primary'\" [icon]=\"'fa-comments'\" [count]=\"26\" [label]=\"'New Comments!'\" ></app-stat>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n            <app-stat [bgClass]=\"'warning'\" [icon]=\"'fa-tasks'\" [count]=\"12\" [label]=\"'New task!'\" ></app-stat>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n            <app-stat [bgClass]=\"'success'\" [icon]=\"'fa-shopping-cart'\" [count]=\"124\" [label]=\"'New Orders!'\" ></app-stat>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n            <app-stat [bgClass]=\"'danger'\" [icon]=\"'fa-support'\" [count]=\"13\" [label]=\"'New Tickets!'\"></app-stat>\n        </div>\n    </div>\n    <hr />\n    <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\">{{ alert.message }}</ngb-alert>\n    <hr />\n    <div class=\"row\">\n        <div class=\"col-lg-8\">\n            <div class=\"card card-default\">\n                <div class=\"card-header\">\n                    <i class=\"fa fa-clock-o fa-fw\"></i> Responsive Timeline\n                </div>\n                <!-- /.card-header -->\n                <app-timeline></app-timeline>\n                <!-- /.card-body -->\n            </div>\n            <!-- /.card -->\n        </div>\n        <!-- /.col-lg-8 -->\n        <div class=\"col-lg-4\">\n            <div class=\"card card-default mb-3\">\n                <div class=\"card-header\">\n                    <i class=\"fa fa-bell fa-fw\"></i> Notifications card\n                </div>\n                <!-- /.card-header -->\n                <app-notification></app-notification>\n                <!-- /.card-body -->\n            </div>\n            <!-- /.card -->\n\n            <app-chat></app-chat>\n            <!-- /.card .chat-card -->\n        </div>\n        <!-- /.col-lg-4 -->\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/chat/chat.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-panel .chat-dropdown {\n  margin-top: -3px;\n}\n.chat-panel .chat {\n  height: 350px;\n  overflow-y: scroll;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.chat-panel .chat .left img {\n  margin-right: 15px;\n}\n.chat-panel .chat .right img {\n  margin-left: 15px;\n}\n.chat-panel .chat li {\n  margin-bottom: 10px;\n  margin-right: 15px;\n  padding-bottom: 5px;\n  border-bottom: 1px dotted #999;\n}\n.chat-panel .card-footer input {\n  padding: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL2NoYXQvRjpcXFBST1lFQ1RPUy1BTkdVTEFSXFxhbmd1bGFyLWNoYXJ0cy1zYmFkbWluL3NyY1xcYXBwXFxsYXlvdXRcXGRhc2hib2FyZFxcY29tcG9uZW50c1xcY2hhdFxcY2hhdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFBO0FDQVI7QURFSTtFQVdJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNWUjtBREhZO0VBQ0ksa0JBQUE7QUNLaEI7QUREWTtFQUNJLGlCQUFBO0FDR2hCO0FES1E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0haO0FET1E7RUFDSSxZQUFBO0FDTFoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZGFzaGJvYXJkL2NvbXBvbmVudHMvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtcGFuZWx7XG4gICAgLmNoYXQtZHJvcGRvd257XG4gICAgICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgfVxuICAgIC5jaGF0e1xuICAgICAgICAubGVmdHtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnJpZ2h0e1xuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBsaXtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjOTk5O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJkLWZvb3RlcntcbiAgICAgICAgaW5wdXR7XG4gICAgICAgICAgICBwYWRkaW5nIDogM3B4O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLmNoYXQtcGFuZWwgLmNoYXQtZHJvcGRvd24ge1xuICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuLmNoYXQtcGFuZWwgLmNoYXQge1xuICBoZWlnaHQ6IDM1MHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5jaGF0LXBhbmVsIC5jaGF0IC5sZWZ0IGltZyB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5jaGF0LXBhbmVsIC5jaGF0IC5yaWdodCBpbWcge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5jaGF0LXBhbmVsIC5jaGF0IGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICM5OTk7XG59XG4uY2hhdC1wYW5lbCAuY2FyZC1mb290ZXIgaW5wdXQge1xuICBwYWRkaW5nOiAzcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/dashboard/components/chat/chat.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.ts ***!
  \********************************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatComponent = class ChatComponent {
    constructor() { }
    ngOnInit() { }
};
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/dashboard/components/chat/chat.component.html"),
        styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/layout/dashboard/components/chat/chat.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChatComponent);



/***/ }),

/***/ "./src/app/layout/dashboard/components/index.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/components/index.ts ***!
  \******************************************************/
/*! exports provided: TimelineComponent, NotificationComponent, ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/layout/dashboard/components/timeline/timeline.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__["TimelineComponent"]; });

/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/layout/dashboard/components/notification/notification.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__["NotificationComponent"]; });

/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/layout/dashboard/components/chat/chat.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]; });






/***/ }),

/***/ "./src/app/layout/dashboard/components/notification/notification.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/dashboard/components/notification/notification.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.ts ***!
  \************************************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotificationComponent = class NotificationComponent {
    constructor() { }
    ngOnInit() { }
};
NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification',
        template: __webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/dashboard/components/notification/notification.component.html"),
        styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/layout/dashboard/components/notification/notification.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NotificationComponent);



/***/ }),

/***/ "./src/app/layout/dashboard/components/timeline/timeline.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timeline {\n  position: relative;\n  padding: 20px 0 20px;\n  list-style: none;\n}\n\n.timeline:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 3px;\n  margin-left: -1.5px;\n  background-color: #eeeeee;\n}\n\n.timeline > li {\n  position: relative;\n  margin-bottom: 20px;\n}\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline > li:after {\n  clear: both;\n}\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline > li:after {\n  clear: both;\n}\n\n.timeline > li > .timeline-panel {\n  float: left;\n  position: relative;\n  width: 46%;\n  padding: 20px;\n  border: 1px solid #d4d4d4;\n  border-radius: 2px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\n}\n\n.timeline > li > .timeline-panel:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  border-top: 15px solid transparent;\n  border-right: 0 solid #ccc;\n  border-bottom: 15px solid transparent;\n  border-left: 15px solid #ccc;\n}\n\n.timeline > li > .timeline-panel:after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  border-top: 14px solid transparent;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  border-left: 14px solid #fff;\n}\n\n.timeline > li > .timeline-badge {\n  z-index: 100;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  background-color: #999999;\n}\n\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right;\n}\n\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0;\n}\n\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0;\n}\n\n.timeline-badge.primary {\n  background-color: #2e6da4 !important;\n}\n\n.timeline-badge.success {\n  background-color: #3f903f !important;\n}\n\n.timeline-badge.warning {\n  background-color: #f0ad4e !important;\n}\n\n.timeline-badge.danger {\n  background-color: #d9534f !important;\n}\n\n.timeline-badge.info {\n  background-color: #5bc0de !important;\n}\n\n.timeline-title {\n  margin-top: 0;\n  color: inherit;\n}\n\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0;\n}\n\n.timeline-body > p + p {\n  margin-top: 5px;\n}\n\n@media (max-width: 767px) {\n  ul.timeline:before {\n    left: 40px;\n  }\n\n  ul.timeline > li > .timeline-panel {\n    width: calc(100% - 90px);\n    width: -webkit-calc(100% - 90px);\n  }\n\n  ul.timeline > li > .timeline-badge {\n    top: 16px;\n    left: 15px;\n    margin-left: 0;\n  }\n\n  ul.timeline > li > .timeline-panel {\n    float: right;\n  }\n\n  ul.timeline > li > .timeline-panel:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0;\n  }\n\n  ul.timeline > li > .timeline-panel:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL3RpbWVsaW5lL0Y6XFxQUk9ZRUNUT1MtQU5HVUxBUlxcYW5ndWxhci1jaGFydHMtc2JhZG1pbi9zcmNcXGFwcFxcbGF5b3V0XFxkYXNoYm9hcmRcXGNvbXBvbmVudHNcXHRpbWVsaW5lXFx0aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBOztFQUVJLFlBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7O0VBRUksWUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUVBLDBDQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQkFBQTtFQUNBLHFDQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EscUNBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtBQ0NKOztBREVBO0VBQ0ksb0NBQUE7QUNDSjs7QURFQTtFQUNJLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtBQ0NKOztBREVBO0VBQ0ksb0NBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7O0VBRUksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksVUFBQTtFQ0NOOztFREVFO0lBQ0ksd0JBQUE7SUFFQSxnQ0FBQTtFQ0NOOztFREVFO0lBQ0ksU0FBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0VDQ047O0VERUU7SUFDSSxZQUFBO0VDQ047O0VERUU7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLHdCQUFBO0lBQ0Esb0JBQUE7RUNDTjs7RURFRTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0Esd0JBQUE7SUFDQSxvQkFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZGFzaGJvYXJkL2NvbXBvbmVudHMvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZWxpbmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAyMHB4IDAgMjBweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4udGltZWxpbmU6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDNweDtcbiAgICBtYXJnaW4tbGVmdDogLTEuNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG59XG5cbi50aW1lbGluZSA+IGxpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRpbWVsaW5lID4gbGk6YmVmb3JlLFxuLnRpbWVsaW5lID4gbGk6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGltZWxpbmUgPiBsaTphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG59XG5cbi50aW1lbGluZSA+IGxpOmJlZm9yZSxcbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnRpbWVsaW5lID4gbGk6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA0NiU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDZweCByZ2JhKDAsMCwwLDAuMTc1KTtcbiAgICBib3gtc2hhZG93OiAwIDFweCA2cHggcmdiYSgwLDAsMCwwLjE3NSk7XG59XG5cbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI2cHg7XG4gICAgcmlnaHQ6IC0xNXB4O1xuICAgIGJvcmRlci10b3A6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjY2NjO1xufVxuXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbDphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI3cHg7XG4gICAgcmlnaHQ6IC0xNHB4O1xuICAgIGJvcmRlci10b3A6IDE0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMTRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogMTRweCBzb2xpZCAjZmZmO1xufVxuXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1iYWRnZSB7XG4gICAgei1pbmRleDogMTAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE2cHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSA1MCUgNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XG59XG5cbi50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbGVmdDogLTE1cHg7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxNXB4O1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xufVxuXG4udGltZWxpbmUgPiBsaS50aW1lbGluZS1pbnZlcnRlZCA+IC50aW1lbGluZS1wYW5lbDphZnRlciB7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbGVmdDogLTE0cHg7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxNHB4O1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xufVxuXG4udGltZWxpbmUtYmFkZ2UucHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlNmRhNCAhaW1wb3J0YW50O1xufVxuXG4udGltZWxpbmUtYmFkZ2Uuc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmOTAzZiAhaW1wb3J0YW50O1xufVxuXG4udGltZWxpbmUtYmFkZ2Uud2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZSAhaW1wb3J0YW50O1xufVxuXG4udGltZWxpbmUtYmFkZ2UuZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lbGluZS1iYWRnZS5pbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjMGRlICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lbGluZS10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLnRpbWVsaW5lLWJvZHkgPiBwLFxuLnRpbWVsaW5lLWJvZHkgPiB1bCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnRpbWVsaW5lLWJvZHkgPiBwICsgcCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOjc2N3B4KSB7XG4gICAgdWwudGltZWxpbmU6YmVmb3JlIHtcbiAgICAgICAgbGVmdDogNDBweDtcbiAgICB9XG5cbiAgICB1bC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHgpO1xuICAgICAgICB3aWR0aDogLW1vei1jYWxjKDEwMCUgLSA5MHB4KTtcbiAgICAgICAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gOTBweCk7XG4gICAgfVxuXG4gICAgdWwudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1iYWRnZSB7XG4gICAgICAgIHRvcDogMTZweDtcbiAgICAgICAgbGVmdDogMTVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgdWwudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbCB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG5cbiAgICB1bC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiAtMTVweDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxNXB4O1xuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgICB9XG5cbiAgICB1bC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsOmFmdGVyIHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IC0xNHB4O1xuICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDE0cHg7XG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICAgIH1cbn1cbiIsIi50aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMjBweCAwIDIwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi50aW1lbGluZTpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogM3B4O1xuICBtYXJnaW4tbGVmdDogLTEuNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xufVxuXG4udGltZWxpbmUgPiBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRpbWVsaW5lID4gbGk6YmVmb3JlLFxuLnRpbWVsaW5lID4gbGk6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi50aW1lbGluZSA+IGxpOmJlZm9yZSxcbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGltZWxpbmUgPiBsaTphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0NiU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE3NSk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTc1KTtcbn1cblxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI2cHg7XG4gIHJpZ2h0OiAtMTVweDtcbiAgYm9yZGVyLXRvcDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkICNjY2M7XG4gIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICNjY2M7XG59XG5cbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI3cHg7XG4gIHJpZ2h0OiAtMTRweDtcbiAgYm9yZGVyLXRvcDogMTRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDE0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiAxNHB4IHNvbGlkICNmZmY7XG59XG5cbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLWJhZGdlIHtcbiAgei1pbmRleDogMTAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZweDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNGVtO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XG59XG5cbi50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udGltZWxpbmUgPiBsaS50aW1lbGluZS1pbnZlcnRlZCA+IC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogLTE1cHg7XG4gIGJvcmRlci1yaWdodC13aWR0aDogMTVweDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG59XG5cbi50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsOmFmdGVyIHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IC0xNHB4O1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDE0cHg7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xufVxuXG4udGltZWxpbmUtYmFkZ2UucHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTZkYTQgIWltcG9ydGFudDtcbn1cblxuLnRpbWVsaW5lLWJhZGdlLnN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y5MDNmICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lbGluZS1iYWRnZS53YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZSAhaW1wb3J0YW50O1xufVxuXG4udGltZWxpbmUtYmFkZ2UuZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZiAhaW1wb3J0YW50O1xufVxuXG4udGltZWxpbmUtYmFkZ2UuaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGUgIWltcG9ydGFudDtcbn1cblxuLnRpbWVsaW5lLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi50aW1lbGluZS1ib2R5ID4gcCxcbi50aW1lbGluZS1ib2R5ID4gdWwge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4udGltZWxpbmUtYm9keSA+IHAgKyBwIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgdWwudGltZWxpbmU6YmVmb3JlIHtcbiAgICBsZWZ0OiA0MHB4O1xuICB9XG5cbiAgdWwudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHgpO1xuICAgIHdpZHRoOiAtbW96LWNhbGMoMTAwJSAtIDkwcHgpO1xuICAgIHdpZHRoOiAtd2Via2l0LWNhbGMoMTAwJSAtIDkwcHgpO1xuICB9XG5cbiAgdWwudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1iYWRnZSB7XG4gICAgdG9wOiAxNnB4O1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICB1bC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cblxuICB1bC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbGVmdDogLTE1cHg7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxNXB4O1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICB9XG5cbiAgdWwudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbDphZnRlciB7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbGVmdDogLTE0cHg7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxNHB4O1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/dashboard/components/timeline/timeline.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.ts ***!
  \****************************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TimelineComponent = class TimelineComponent {
    constructor() { }
    ngOnInit() {
    }
};
TimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timeline',
        template: __webpack_require__(/*! raw-loader!./timeline.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/dashboard/components/timeline/timeline.component.html"),
        styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/app/layout/dashboard/components/timeline/timeline.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TimelineComponent);



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");




const routes = [
    {
        path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");



let DashboardComponent = class DashboardComponent {
    constructor() {
        this.alerts = [];
        this.sliders = [];
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'First slide label',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'Second slide label',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: 'Third slide label',
            text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        });
        this.alerts.push({
            id: 1,
            type: 'success',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        }, {
            id: 2,
            type: 'warning',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        });
    }
    ngOnInit() { }
    closeAlert(alert) {
        const index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/dashboard/dashboard.component.html"),
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/layout/dashboard/dashboard.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DashboardComponent);



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.module.ts ***!
  \******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/layout/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/app/layout/dashboard/components/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");








let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"],
            _shared__WEBPACK_IMPORTED_MODULE_7__["StatModule"]
        ],
        declarations: [
            _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
            _components__WEBPACK_IMPORTED_MODULE_6__["TimelineComponent"],
            _components__WEBPACK_IMPORTED_MODULE_6__["NotificationComponent"],
            _components__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"]
        ]
    })
], DashboardModule);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map