#include <algorithm>
#include <fstream>
#include <iostream>
#include <vector>
#include <memory>
#include "simple-web-server/client_https.hpp"
#include "simple-web-server/crypto.hpp"
#include "simple-web-server/server_https.hpp"

// Added for the json-example



using namespace std;

using HttpsServer = SimpleWeb::Server<SimpleWeb::HTTPS>;
using HttpClient = SimpleWeb::Client<SimpleWeb::HTTP>;
