# Game

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Bind it!

- [x] Create three new components: GameControl, Odd and Even
- [x]  The GameControl Component should have buttons to start and stop the game
- [x] When starting the game, an event (holding a incrementing number) should get emitted each second (ref = setInterval())
- [x] The event should be listenable from outside the component
- [x] When stopping the game, no more events should get emitted (clearInterval(ref))
- [x] A new Odd component should get created for every odd number emitted, the same should happen for the Even Component (on even numbers)
- [x] Simply output Odd - NUMBER or Even - NUMBER in the two components
- [x] Style the element (e.g. paragraph) holding your output text differently in both components
