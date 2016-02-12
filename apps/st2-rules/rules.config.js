'use strict';

module.exports = function st2RulesConfig($stateProvider) {

  $stateProvider
    .state('rules', {
      abstract: true,
      url: '/rules',
      icon: 'st2-icon__rules',
      controller: 'st2RulesCtrl',
      templateUrl: 'apps/st2-rules/template.html',
      title: 'Rules',
      position: 3
    })
    .state('rules.list', {
      url: ''
    })
    .state('rules.new', {
      url: '/new'
    })
    .state('rules.general', {
      url: '/{ref:[\\w.-]+}/general?edit'
    })
    .state('rules.code', {
      url: '/{ref:[\\w.-]+}/code?edit'
    })

    ;

};
