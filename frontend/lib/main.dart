import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'GoRouter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('GoRouter'),
        ),
        body: Center(
          child: Text('Welcome'),
        ),
      ),
    );
  }
}
