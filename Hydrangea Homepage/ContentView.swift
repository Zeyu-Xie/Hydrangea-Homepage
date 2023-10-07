//
//  ContentView.swift
//  Hydrangea Homepage
//
//  Created by Acan on 2023/10/7.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading) {
            Text("Google").font(.title)
            Text("Tencent").font(.title)
        }.frame(alignment: .leading)
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
