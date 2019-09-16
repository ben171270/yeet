#include <boost/program_options.hpp>

#include <string>
#include <sstream>
#include <iostream>
#include <vector>
#include <regex>
#include <condition_variable>
#include <mutex>
#include "SampleServer.h"

int main(int argc, char** argv)
{
  HttpsServer server("server.crt", "server.key");
  server.config.port = 443;
  server.resource["/api"]["GET"] =
      [](shared_ptr<HttpsServer::Response> response,
          shared_ptr<HttpsServer::Request> request) {
        (void)response;
        auto content = request->content.string();
        std::string responseText="bla";

        *response << "HTTP/1.1 200 OK\r\nContent-Length: " << responseText.length() << "\r\n\r\n"
                  << responseText << "\r\n" ;
      };

    server.on_error = [](shared_ptr<HttpsServer::Request> /*request*/,
                        const SimpleWeb::error_code& ec) {
  };
  thread server_thread([&server]() { server.start(); });
  server_thread.join();
}
