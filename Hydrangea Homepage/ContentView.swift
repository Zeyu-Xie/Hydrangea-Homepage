//
//  ContentView.swift
//  Hydrangea Homepage
//
//  Created by Acan on 2023/10/7.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        ScrollView {
            
            VStack(alignment: .leading) {
                
                VStack(alignment: .leading) {
                    Text("Hydrangea Homepage").font(.largeTitle)
                }.frame(alignment: .leading).padding()
                
                VStack(alignment: .leading) {
                    Divider()
                    Text("Google").font(.title)
                    Website(name: "Google", url: "https://google.com")
                    Website(name: "Gmail", url: "https://mail.google.com")
                }.frame(alignment: .leading).padding()
                
                
                VStack(alignment: .leading) {
                    Divider()
                    Text("Baidu").font(.title)
                    Website(name: "Baidu", url: "https://baidu.com", iconUrl: "https://www.baidu.com/favicon.ico")
                }.frame(alignment: .leading).padding()
                
                VStack(alignment: .leading) {
                    Divider()
                    Text("Tsinghua University").font(.title)
                    Website(name: "Tsinghua University", url: "https://www.tsinghua.edu.cn")
                }.frame(alignment: .leading).padding()
                
            }.frame(alignment: .leading).padding()
            
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
