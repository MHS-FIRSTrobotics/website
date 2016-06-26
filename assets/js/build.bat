@echo off

java -jar "C:\Users\dmssa_000\Documents\ClosureCompiler\compiler.jar" -O WHITESPACE_ONLY --js="lib\jquery.js" --js="lib\tether.js" --js="lib\angular.js" --js="lib\highlight.js" --js="lib\flowtype.js" --js="lib\bootstrap\bootstrap.js" --js="app\**.js" --js="core.js" --js="!**.min.js" --js_output_file="main.min.js" --create_source_map "main.js.map"