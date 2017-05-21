import * as angular from "angular";
import "angular-mocks";
import { HeaderComponentController, HeaderModel, HeaderComponent } from "./header.component";
import { IHttpService, IPromise, IScope } from "angular";

describe('HeaderComponentController', () => {
    let controller: HeaderComponentController;
    let messages: any;
    let mockService: any = {
        getMessage: jasmine.createSpy("getMessage")
    }

    beforeEach(angular.mock.module('myApp'));
    beforeEach(angular.mock.module('myApp.components'));

    var scope;
    let spy;
    beforeEach(inject(($rootScope, $componentController) => {
        scope = $rootScope.$new();
        controller = $componentController("appHeader", {
            service: mockService,
        })
    }));
    it('HeaderComponentController should be defined ', () => {
        expect(controller).toBeDefined();
    });
    it('should get message from service', () => {
        spy = spyOn(controller, 'getMessage');
        controller.getMessage();
        expect(controller.getMessage).toHaveBeenCalled();
    });
});