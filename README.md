Purpose:

To display real time machine status and information on a website with 3D interactive

Basic User Story:

- Click on machine, close up camera view of the machine
- Click individual station, will popup side panel to show real time information
- Click outside space, resets the camera to overview, side panel closed

Other details:

- Overview will show status of machine (traffic light colour status only)
- Add banner for easy navigate between machine, instead of click on machine object (maybe)

Targets:

- [x] Successfully run local website using Vanilla JS embeded Spline3D
- [x] Listen to event to trigger using SplineTool Runtime
- [x] Set Variables using SplineTool Runtime (to trigger objct states)
- [x] Add basic side panel (to display real time information)
- [ ] Add fixed/sticky banner (navigation between station ~maybe~)
- [ ] REST API GET from NI SystemLink for on screen information (to get real time information from server)
- [ ] Webhooks test for Spline variables (alternative to trigger object states from machine itself, but only available one webhook setup)
- [ ] Design side panel HTML
- [ ] Test with real time data


References from:

- github.com/mandrasch/spline-selfhosted
- npmjs.com/package/@splinetool/runtime
- codepen.io/khaled-baheiy/pen/pZGMyx

