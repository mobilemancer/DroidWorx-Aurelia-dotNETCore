import { StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';

describe('DroidTile', () => {
  let component;

  beforeEach(() => {
    component = StageComponent
      .withResources('resources/elements/droid-infotile')
      .inView('<droid-infotile droid.bind="droid"></droid-infotile>')
      .boundTo({
        droid: {
          id: 0,
          armaments: ["DAS-430 Neural Inhibitor", "Heavy pulse cannon", "Poison darts", "Toxic gas dispensers"],
          creditBalance: 4611686018427388000,
          entryDate: "2016-10-08T13:12:09.4251166Z",
          equipment: [],
          height: 1.96,
          imperialContractId: "0b450fdd-f484-423b-8685-4193e9fa583d",
          name: "IG-88",
          productSeries: "IG-86"
        }
      });
  });

  it('should render name', done => {
    component.create(bootstrap).then(() => {
      const nameElement = document.querySelector('.header-small');
      expect(nameElement.innerHTML).toBe('IG-88');
      done();
    });
  });

  afterEach(() => {
    component.dispose();
  });
});