# TODO

## Now

- [x] Replace tsdx with Typescript
- [ ] Replace jest with mocha and nyc
- [ ] Figure out if you can craft sub-libraries with it

## Next

- [x] It should have a way to create a folder
- [x] It should have a way to create a file
- [x] It should have a way to run a custom command
- [ ] It should have a way to check if the action has the prerequisite requirements
- [ ] It should have a way to check if the action was successful afterwards
- [ ] It should have a way to log the actions being run
- [ ] It should have a way to revert any instructions run (reverse)

## Other items for sorting later (needs refining)

- Figure out how to log actions taken and results, as well as output from the actions (pass a flag)

- It should have a CLI for running an instruction set
- It should allow you to create an instruction set
- It should allow you to add templates to the instruction set
- It should allow you to do that programmatically
- It should be able to check if each instruction is good to run
- It should be able to reverse an instruction
- It should be able to track where in the instruction set it has got to

So, for example, say I want a scaffold for making a new package:

- Create a few folders
- Create a few files in those folders

I would want an instruction set that provides a way to execute that

---

Break things down into little chunks (chunking, map/reduce)

- The tricky bit is modifying code that needs to be merged together in some way
- Adding lines in a standard format is fine (e.g. gitignore)
- Or where the details are handled automatically (e.g. npm install)
- Tricky thing is javascript code/react components
- If you can find a parser like esprima that can handle it, or write parsers that can work out what to do, then brilliant.
