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
                    Link(destination: URL(string: "https://zeyu-xie.github.io/Acan")!) {
                        Text("- Made by Acan")
                    }.frame(height: 24)
                    Link(destination: URL(string: "https://github.com/zeyu-xie/Hydrangea-Homepage/tree/iOS")!) {
                        Text("- GitHub")
                    }.frame(height: 24)
                }.frame(alignment: .leading)
                
                VStack(alignment: .leading) {
                    Divider()
                    Text("Develop").font(.title)
                    HStack {
                        Website(name: "GitHub", url: "https://github.com")
                        Website(name: "Stack Overflow", url: "https://stackoverflow.com")
                        Website(name: "CSDN", url: "https://csdn.net")
                    }
                    HStack {
                        Website(name: "Bootstrap", url: "https://getbootstrap.com")
                        Website(name: "Animate.css", url: "https://animate.style", iconUrl: "https://animate.style/img/favicon.ico")
                    }
                }.frame(alignment: .leading).padding(.top)
                
                VStack(alignment: .leading) {
                    Divider()
                    Text("Search").font(.title)
                    HStack {
                        Website(name: "Google", url: "https://google.com")
                        Website(name: "百度", url: "https://baidu.com", iconUrl: "https://www.baidu.com/favicon.ico")
                        Website(name: "NoteAI", url: "https://noteai.com")
                        Website(name: "Google Images", url: "https://image.google.com")
                    }
                }.frame(alignment: .leading).padding(.top)
                
                VStack(alignment: .leading) {
                    Divider()
                    Text("Tools").font(.title)
                    HStack {
                        Website(name: "Cloud Convert", url: "https://cloudconvert.com", iconUrl: "https://cloudconvert.com/images/logo_flat_32.png")
                    }
                }.frame(alignment: .leading).padding(.top)
                
                VStack(alignment: .leading) {
                    Divider()
                    Text("Videos").font(.title)
                    HStack {
                        Website(name: "Bilibili", url: "https://bilibili.com")
                        Website(name: "Youtube", url: "https://youtube.com")
                        Website(name: "Netflix", url: "https://netflix.com")
                    }
                }.frame(alignment: .leading).padding(.top)
                
                VStack(alignment: .leading) {
                    Divider()
                    Text("AI").font(.title)
                    HStack {
                        Website(name: "ChatGPT", url: "https://chat.openai.com")
                        Website(name: "Poe", url: "https://poe.com")
                    }
                }.frame(alignment: .leading).padding(.top)
                
                VStack(alignment: .leading) {
                    Divider()
                    Text("Tsinghua University").font(.title)
                    HStack {
                        Website(name: "清华大学", url: "https://www.tsinghua.edu.cn")
                        Website(name: "清华大学图书馆", url: "https://lib.tsinghua.edu.cn", iconUrl: "https://www.tsinghua.edu.cn/favicon.ico")
                        Website(name: "清华 Info", url: "http://info.tsinghua.edu.cn", iconUrl: "https://www.tsinghua.edu.cn/favicon.ico")
                    }
                    HStack {
                        Website(name: "网络学堂", url: "https://learn.tsinghua.edu.cn",iconUrl: "https://www.tsinghua.edu.cn/favicon.ico")
                        Website(name: "教学门户", url: "https://academic.tsinghua.edu.cn", iconUrl: "https://www.tsinghua.edu.cn/favicon.ico")
                    }
                }.frame(alignment: .leading).padding(.top)
                
            }.frame(alignment: .leading).padding()
            
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
